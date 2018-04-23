import { Component, OnInit } from '@angular/core';
import * as interact from 'interactjs';
import { Node, Link } from '../d3-graph';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];

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

  ngOnInit() {
    var element = document.getElementsByClassName("gridSnap"),
    x = 0, 
    y = 0;
    console.log(element);
    
    interact('.gridSnap')
      .draggable({
        inertia: true,
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        },
        autoScroll:true
      })
      .on('dragmove', function (event) {
        x += event.dx;
        y += event.dy;

        event.target.style.webkitTransform =
          event.target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
      });
  }

}
