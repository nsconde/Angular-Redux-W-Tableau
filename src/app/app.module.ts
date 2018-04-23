import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TableauTestComponent } from './tableau-test/tableau-test.component';
import { D3Service, D3_DIRECTIVES } from './d3-graph';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { TabViewComponent } from './tab-view/tab-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent,
    TableauTestComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    DashboardViewComponent,
    TabViewComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

}
