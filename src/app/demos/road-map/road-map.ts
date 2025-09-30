import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5timeline from "@amcharts/amcharts5/timeline";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_indiaHigh from "@amcharts/amcharts5-geodata/indiaHigh"; // <-- India map

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { itineraryRoute } from '../../data/package.data';

@Component({
  selector: 'app-road-map',
  template: `
    <div #mapDiv class="w-full h-[500px] mb-8"></div> 
  `,
  standalone: true
})
export class RoadMap implements OnInit, OnDestroy {

  data = itineraryRoute

  @ViewChild('mapDiv', { static: true }) mapDiv!: ElementRef<HTMLDivElement>;

  private mapRoot?: am5.Root;

  private pointSeries?: am5map.MapPointSeries;
  private mainColor = am5.color(0xc83830);
  private secondaryColor = am5.color(0xd9cec8);


  ngOnInit(): void {
    this.createMapChart();
  }

  ngOnDestroy(): void {
    this.mapRoot?.dispose();
  }

  private createMapChart(): void {
    const root = am5.Root.new(this.mapDiv.nativeElement);
    this.mapRoot = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "translateX",
      panY: "translateY",
      projection: am5map.geoMercator(),
      homeGeoPoint: { longitude: 77.0, latitude: 10.0 }, // Center on South India
      homeZoomLevel: 9
    }));

    const polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_indiaHigh // <-- India polygons
    }));

    polygonSeries.mapPolygons.template.setAll({
      fill: this.secondaryColor,
      stroke: am5.color(0xffffff),
      strokeWidth: 1,
      strokeOpacity: 0.5
    });

    polygonSeries.events.on("datavalidated", () => chart.goHome());

    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: am5.color(0x000000),
      strokeDasharray: [3, 3],
      strokeWidth: 1,
      strokeOpacity: 0.5
    });

    this.pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {
      valueField: "population",
      calculateAggregates: true,
      idField: "name"
    }));

    const circleTemplate = am5.Template.new({});

    this.pointSeries.set("heatRules", [{
      target: circleTemplate as unknown as am5.Template<am5.Circle>,
      min: 3,
      max: 17,
      dataField: "value",
      key: "radius"
    }]);

    this.pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {});

      const circle = container.children.push(am5.Circle.new(root, {
        radius: 9,
        fill: this.mainColor,
        stroke: this.mainColor,
        strokeWidth: 1,
        strokeOpacity: 0.8,
        fillOpacity: 0.7,
        layer: 30
      }, circleTemplate as unknown as am5.Template<am5.Circle>));

      circle.states.create("hover", { scale: 1.4, fillOpacity: 1 });

      const label = container.children.push(am5.Label.new(root, {
        text: "{name}",
        fontSize: 13,
        centerY: am5.p50,
        centerX: am5.p100,
        populateText: true,
        layer: 30,
        paddingRight: 4
      }));

      label.adapters.add("dx", () => -(circle?.get("radius") ?? 0));

      return am5.Bullet.new(root, { sprite: container, locationX: 0, locationY: 0.5 });
    });
    this.pointSeries.data.setAll(this.data);

    const pointsToConnect = this.pointSeries.dataItems;
    lineSeries.pushDataItem({ pointsToConnect });

    chart.appear(1000, 100);
  }



}
