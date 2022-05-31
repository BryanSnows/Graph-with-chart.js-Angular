import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';
import { ExempleComponent } from './components/exemple/exemple.component';
import { PlanbComponent } from './components/planb/planb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzagraphComponent } from './components/pizzagraph/pizzagraph.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RequetsComponent } from './components/requets/requets.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    ExempleComponent,
    PlanbComponent,
    PizzagraphComponent,
    CarouselComponent,
    RequetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
