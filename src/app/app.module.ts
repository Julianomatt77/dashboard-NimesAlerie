import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RowItemComponent } from './views/row-item/row-item.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { ChartBarCardComponent } from './components/chart-bar-card/chart-bar-card.component';
import { GraphicCardComponent } from './components/graphic-card/graphic-card.component';
import { PieChartCardComponent } from './components/pie-chart-card/pie-chart-card.component';
import { ErrorsViewComponent } from './views/errors-view/errors-view.component';
import { ErrorComponent } from './components/error/error.component';
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    RowItemComponent,
    DatePickerComponent,
    DataCardComponent,
    ChartBarCardComponent,
    GraphicCardComponent,
    PieChartCardComponent,
    ErrorsViewComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent, DatePickerComponent],
})
export class AppModule {}
