import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';
import * as interact from 'interactjs';
import { Node, Link } from '../d3-graph';
import { DisplayGrid, GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardViewComponent implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() {
    const N = 10,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.info('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItemComponentInterface, target: GridsterItemComponentInterface, grid: GridsterComponent) {
    console.log('overlap', source, target, grid);
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  ngOnInit() {
    var element = document.getElementsByClassName("gridSnap"),
    x = 0, 
    y = 0;
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: DashboardViewComponent.eventStop,
        start: DashboardViewComponent.eventStart,
        dropOverItems: false,
        dropOverItemsCallback: DashboardViewComponent.overlapEvent,
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      { cols: 1, rows: 1, y: 0, x: 1 }
      , { cols: 1, rows: 1, y: 0, x: 0 }
    ];
    
    // interact('.gridSnap')
    //   .draggable({
    //     inertia: true,
    //     restrict: {
    //       restriction: 'parent',
    //       elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
    //       endOnly: true
    //     },
    //     autoScroll:true
    //   })
    //   .on('dragmove', function (event) {
    //     x += event.dx;
    //     y += event.dy;

    //     event.target.style.webkitTransform =
    //       event.target.style.transform =
    //       'translate(' + x + 'px, ' + y + 'px)';
    //   });
  }

}
