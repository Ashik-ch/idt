import { Component, ElementRef, ViewChild, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

@Component({
  selector: 'app-outbound-globe',
  standalone: true,
  templateUrl: './outbound-globe.html',
  styleUrls: ['./outbound-globe.css']
})
export class OutboundGlobe implements AfterViewInit, OnDestroy {
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef<HTMLDivElement>;
  private root?: am5.Root;
  globeMode = false 

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => this.initChart());
  }

  private initChart() {
    if (this.root) this.root.dispose();

    const root = am5.Root.new(this.chartDiv.nativeElement);
    this.root = root;

    root.setThemes([am5themes_Animated.new(root)]);

    // 🌍 MapChart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        panY: 'rotateY',
        projection: this.globeMode ? am5map.geoOrthographic() : am5map.geoMercator(),
        rotationY: this.globeMode ? 20 : 0,
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'], // Antarctica
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xeeeeee),
      stroke: am5.color(0x999999),
      strokeWidth: .5,
    });

    // 📍 Location markers
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push((root, series, dataItem) =>
      am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 6,
          tooltipText: '{title}',
          fill: am5.color(0xe11d48),
          stroke: am5.color(0xffffff),
          strokeWidth: 2,
        }),
      })
    );

    // ✈️ India + destinations
    const cities = [
      { id: 'india', title: 'India', geometry: { type: 'Point', coordinates: [77.209, 28.6139] } },
      { id: 'uae', title: 'UAE', geometry: { type: 'Point', coordinates: [55.2708, 25.2048] } },
      { id: 'usa', title: 'USA', geometry: { type: 'Point', coordinates: [-74.006, 40.7128] } },
      { id: 'uk', title: 'UK', geometry: { type: 'Point', coordinates: [-0.1276, 51.5072] } },
      { id: 'singapore', title: 'Singapore', geometry: { type: 'Point', coordinates: [103.8198, 1.3521] } },
    ];
    pointSeries.data.setAll(cities);


    const cityCountryMap: Record<string, string> = { india: "IN", uae: "AE", usa: "US", uk: "GB", singapore: "SG", };

    polygonSeries.events.on("datavalidated", () => {
      polygonSeries.mapPolygons.each((polygon: any) => {
        const id = polygon.dataItem?.get("id") as string;
        const match = Object.values(cityCountryMap).includes(id);
        if (match) {
          polygon.set("fill", am5.color(0xffcc00));
        }
      });
    });

    const highlightedCountries = ["IN", "AE", "US", "GB", "SG"];
    polygonSeries.events.on("datavalidated", () => {
      polygonSeries.mapPolygons.each((polygon: any) => {
        const id = polygon.dataItem?.get("id");
        if (highlightedCountries.includes(id)) {
          polygon.set("fill", am5.color(0xffcc00)); // Yellow highlight
        }
      });
    });

    // 🛫 Flight paths
    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: am5.color(0xe11d48),
      strokeWidth: 2,
      strokeOpacity: 0.6,
    });

    const india = pointSeries.getDataItemById('india');
    ['uae', 'usa', 'uk', 'singapore'].forEach((id) => {
      const dest = pointSeries.getDataItemById(id);
      if (!india || !dest) return;

      const lineDataItem = lineSeries.pushDataItem({});
      lineDataItem.set('pointsToConnect', [india, dest]);

      // ✨ Animated plane marker
      const planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
      planeSeries.bullets.push(() =>
        am5.Bullet.new(root, {
          sprite: am5.Graphics.new(root, {
            svgPath:
              'M2,2 L-2,2 L-2,-2 L2,-2 Z', // simple square marker (replace with airplane icon)
            scale: 0.6,
            fill: am5.color(0xe11d48),
          }),
        })
      );
      const plane = planeSeries.pushDataItem({ lineDataItem, positionOnLine: 0 });

      this.animatePlane(plane, lineDataItem, 4000);
    });

    chart.appear(1000, 100);
  }

  private animatePlane(plane: any, line: any, duration: number) {
    plane.animate({
      key: 'positionOnLine',
      from: 0,
      to: 1,
      duration,
      loops: Infinity,
    });
  }

  toggleProjection() {
    this.globeMode = !this.globeMode;
    this.initChart(); // rebuild chart with new projection
  }

  ngOnDestroy() {
    if (this.root) this.root.dispose();
  }
}
