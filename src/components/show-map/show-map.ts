import { Component, OnInit , ViewChild, Output, EventEmitter} from '@angular/core';

import { OfflineOptions, ControlAnchor, NavigationControlType } from 'angular2-baidu-map';

/**
 * Generated class for the ShowMap component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'show-map',
  templateUrl: 'show-map.html'
})
export class ShowMap implements OnInit{

  text: string;
  @ViewChild('baidumap') baidumap; 
  @Output()  onLoad : EventEmitter<any>;
  @Output()  hideMap: EventEmitter<any>;
  constructor() {
    console.log('Hello ShowMap Component');
    this.text = 'Hello World';
    this.onLoad = new EventEmitter();
    this.hideMap = new EventEmitter();
  }
   opts: any;
    offlineOpts: OfflineOptions;

    ngOnInit() {
        this.opts = {
            center: {
                longitude: 108.95309828,
                latitude: 34.2777999
            },
            zoom: 17,
            markers: [{
                longitude: 108.95309828,
                latitude: 34.2777999,
                title: 'Where',
                content: 'Put description here',
                enableDragging: true
            }],
            geolocationCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
                enableAutoLocation: true
            },
            scaleCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
            },
            overviewCtrl: {
                isOpen: true
            },
            navCtrl: {
                type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
            }
        };

        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };
    }

    loadMap(map: any) {
        console.log(map);
        console.log('map instance here', map);
    }

    clickMarker(marker: any) {
        console.log('The clicked marker is', marker);
    }

    clickmap(e: any) {
        console.log(`Map clicked with coordinate: ${e.point.lng}, ${e.point.lat}`);
        console.log(this.baidumap);
    }
    updateCoordinate(e: MouseEvent){
        console.log(this.baidumap);
        // this.opts = {
        //     center: {
        //         longitude: 121.500885,
        //         latitude: 31.190032
        //     }
        // };
this.onLoad.emit();
this.hideMap.emit();
    }


}
