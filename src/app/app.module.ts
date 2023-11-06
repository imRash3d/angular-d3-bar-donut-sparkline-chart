import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { SparklineChartComponent } from './sparkline-chart/sparkline-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule],
  declarations: [AppComponent, SparklineChartComponent, BarChartComponent, DonutChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
