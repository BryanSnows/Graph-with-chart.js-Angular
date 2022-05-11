import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-pizzagraph',
  templateUrl: './pizzagraph.component.html',
  styleUrls: ['./pizzagraph.component.css']
})
export class PizzagraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const data = {
      labels: [
        'Masculino 74%',
        'Feminino 26%'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [74, 26],
        backgroundColor: [
          'rgba(0, 255, 163, 1)',
          'rgba(0, 255, 255, 1)'
        ],
        hoverOffset: 4
      }]
    };
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                },
            }
        }
    }
    });
  }

}
