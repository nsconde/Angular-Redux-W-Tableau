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
    let placeholderDiv = document.getElementById("tableauViz");
    let url = "http://localhost/views/testScenarioWork/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no";
    let options = {
      width: "100%",
      height: 750,
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        this.workbook = viz.getWorkbook();
        this.activeSheet = this.workbook.getActiveSheet();
      }
    };
    let viz = new tableau.Viz(placeholderDiv, url, options);
  }
}
