import { Component, OnInit } from '@angular/core';
declare var tableau: any;

@Component({
  selector: 'app-tableau-test',
  templateUrl: './tableau-test.component.html',
  styleUrls: ['./tableau-test.component.css']
})
export class TableauTestComponent implements OnInit {
  viz:any;
  workbook: any;
  activeSheet: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.initViz();
  }

  initViz() {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://public.tableau.com/views/RottenTomatoes-Criticsvs_Audience/RT-Criticsvs_Audience?:embed=y&:display_count=yes";
    var options = {
      width: placeholderDiv.offsetWidth,
      height: 750,
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        this.workbook = viz.getWorkbook();
        this.activeSheet = this.workbook.getActiveSheet();
      }
    };
    var viz = new tableau.Viz(placeholderDiv, url, options);
  }
}
