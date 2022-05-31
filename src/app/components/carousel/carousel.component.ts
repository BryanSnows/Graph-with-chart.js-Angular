import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service) { }

  public ngAfterViewInit(): void {
    // initialize a single carousel with an id
this.angular2MaterializeService.initCarousel('#carousel-id');
 
// initialize all carousels with class .carousel
this.angular2MaterializeService.initCarousel('.carousel');
 
// initialization with options
this.angular2MaterializeService.initCarousel('.carousel', {
  // insert options here
});
    
}
  

  ngOnInit(): void {
  }

}
