import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';
import { ExempleComponent } from './components/exemple/exemple.component';
import { PlanbComponent } from './components/planb/planb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzagraphComponent } from './components/pizzagraph/pizzagraph.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    ExempleComponent,
    PlanbComponent,
    PizzagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
