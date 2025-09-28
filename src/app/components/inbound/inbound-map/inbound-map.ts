import { Component, ElementRef, ViewChild } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_indiaLow from '@amcharts/amcharts5-geodata/indiaLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { highlightedStates, statesData } from '../../../data/inbound.data';

@Component({
  selector: 'app-inbound-map',
  imports: [],
  templateUrl: './inbound-map.html',
  styleUrl: './inbound-map.css'
})
export class InboundMap {
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef<HTMLDivElement>;
  private root!: am5.Root;
  statesData = statesData;
  highlightedStates = highlightedStates;

  ngAfterViewInit(): void {
    this.root = am5.Root.new(this.chartDiv.nativeElement);
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Map chart
    const chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        panX: 'translateX',
        panY: 'translateY',
        projection: am5map.geoMercator(),
      })
    );

    // Base India polygon
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_indiaLow,
      })
    );

    // Highlight states
    polygonSeries.mapPolygons.template.adapters.add('fill', (fill, target) => {
      const id = (target.dataItem?.dataContext as any)?.id;
      if (!id) return fill;
      const colors: Record<string, number> = {
        'IN-MH': 0xff6b6b,
        'IN-WB': 0x6bc5ff,
        'IN-TN': 0x6bff95,
        'IN-KA': 0xffd36b,
        'IN-TG': 0xd36bff,
        'IN-DL': 0x6bffea,
        'IN-RJ': 0xfff000,
        'IN-KL': 0xffff00,
      };
      return colors[id] ? am5.color(colors[id]) : fill;
    });

    // City markers
    const citySeries = chart.series.push(am5map.MapPointSeries.new(this.root, {}));
    citySeries.bullets.push(() =>
      am5.Bullet.new(this.root, {
        sprite: am5.Circle.new(this.root, {
          radius: 5,
          tooltipText: '{title}',
          fill: am5.color(0xffba00),
          stroke: this.root.interfaceColors.get('background'),
          strokeWidth: 2,
        }),
      })
    );
    const cities=this.highlightedStates;
    citySeries.data.setAll(cities);

    // Invisible "path" lines (bullets move along this)
    const lineSeries = chart.series.push(am5map.MapLineSeries.new(this.root, {}));
    lineSeries.mapLines.template.setAll({
      strokeOpacity: 0,
    });

    // Visible animated lines (connect moving bullets)
    const animatedLineSeries = chart.series.push(am5map.MapLineSeries.new(this.root, {}));
    animatedLineSeries.mapLines.template.setAll({
      stroke: this.root.interfaceColors.get('alternativeBackground'),
      strokeOpacity: 0.6,
      strokeWidth: 2,
    });

    // Invisible bullets that move along invisible lines
    const animatedBulletSeries = chart.series.push(am5map.MapPointSeries.new(this.root, {}));
    animatedBulletSeries.bullets.push(() =>
      am5.Bullet.new(this.root, {
        sprite: am5.Circle.new(this.root, { radius: 0 }),
      })
    );

    // ✅ Detect user location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        console.log("User Location:", lat, lng);

        // 🔹 Reverse geocode to get state
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
          .then((res) => res.json())
          .then((data) => {
            const state = data?.address?.state;
            console.log("Detected State:", state);
            let matchedCity: any = null;
            if (state) {
              matchedCity = cities.find((c) =>
                state.toLowerCase().includes(c.title.toLowerCase())
              );
            }
            const origin = citySeries.getDataItemById(matchedCity?.id || "kerala");
            const destinations = ["kerala", "mumbai", "kolkata", "chennai", "bengaluru", "hyderabad", "delhi", "rajasthan"];
            destinations.forEach((id) => {
              const destination = citySeries.getDataItemById(id);
              if (!origin || !destination) return;

              const lineDataItem = lineSeries.pushDataItem({});
              lineDataItem.set("pointsToConnect", [origin, destination]);

              const start = animatedBulletSeries.pushDataItem({ lineDataItem, positionOnLine: 0 });
              const end = animatedBulletSeries.pushDataItem({ lineDataItem, positionOnLine: 1 });

              const animatedLine = animatedLineSeries.pushDataItem({});
              animatedLine.set("pointsToConnect", [start, end]);

              const lon0 = origin.get("longitude");
              const lat0 = origin.get("latitude");
              const lon1 = destination.get("longitude");
              const lat1 = destination.get("latitude");
              const distance = Math.hypot((lon1 ?? 0) - (lon0 ?? 0), (lat1 ?? 0) - (lat0 ?? 0));
              const duration = distance * 120;

              this.animateStart(start, end, duration);
            });
          });
      },
      (err) => {
        console.warn("Geolocation failed, defaulting to Kerala");
        const origin = citySeries.getDataItemById("kerala");
      }
    );


    // Focus on India
    polygonSeries.events.on('datavalidated', () => {
      chart.zoomToGeoPoint({ longitude: 78.9629, latitude: 20.5937 }, 0.5);
    });

    chart.appear(1000, 100);
  }

  private animateStart(start: any, end: any, duration: number) {
    const anim = start.animate({ key: 'positionOnLine', from: 0, to: 1, duration });
    anim.events.on('stopped', () => this.animateEnd(start, end, duration));
  }

  private animateEnd(start: any, end: any, duration: number) {
    start.set('positionOnLine', 0);
    const anim = end.animate({ key: 'positionOnLine', from: 0, to: 1, duration });
    anim.events.on('stopped', () => this.animateStart(start, end, duration));
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
