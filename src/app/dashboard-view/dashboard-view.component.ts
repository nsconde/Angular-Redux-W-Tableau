import { Component, OnInit } from '@angular/core';
import * as interact from 'interactjs';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  constructor() { }

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
