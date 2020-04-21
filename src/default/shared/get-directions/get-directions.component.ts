/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component } from '@angular/core';

import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps';

@Component({
  selector: 'app-get-directions',
  templateUrl: './get-directions.component.html',
  styleUrls: ['./get-directions.component.scss']
})
export class GetDirectionsComponent {
  // google maps zoom level
  public zoom = 2;
  // initial center position for the map
  //10,484130, -66,852531
  public lattitudeLocation = 10.484130;
  public longitudeLocation = -66.852531;

  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: true,
    disableStreetside: false,
    navigationBarMode: 1, 
    zoom: 5,
    disableZooming: false,
    mapTypeId: 2,
    showMapTypeSelector: false
  };
  
  _box: IBox = {
    maxLatitude: this.lattitudeLocation + 0.001,
    maxLongitude: this.longitudeLocation + 0.01,
    minLatitude: this.lattitudeLocation - 0.001,
    minLongitude: this.longitudeLocation - 0.01
  };
  
  _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 48,
    color: 'blue',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'    
  };

  constructor() {}
}
