import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { ChartType } from 'chart.js';
import {ExempleComponent} from '../exemple/exemple.component';



@Component({
  
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    const data = {
      //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'INDICADORES',
        data: [
        { days: 'Físico', products:{ sales: 3, link: ''} },
        { days: 'Social', products:{ sales: 4, link: 'https://www.chartjs3.com'} },
        { days: 'Psicológico', products:{ sales: 3.5, link: 'https://www.google.com'} },
        { days: 'Ambiental', products:{ sales: 4.5, link: 'https://www.google.com'} },
        ],
        backgroundColor: [
          'rgba(120, 245, 164, 1)',
          'rgba(107, 225, 218, 1)',
          'rgba(119, 249, 251, 1)',
          'rgba(109, 225, 183, 1)',
        ],
        borderColor: [
          'rgba(120, 245, 164, 1)',
          'rgba(107, 225, 218, 1)',
          'rgba(119, 249, 251, 1)',
          'rgba(109, 225, 183, 1)',
        ],
        borderWidth: 1
      }]
      
    };
   
  const data2 = {
  labels: ['exem1', 'exem2', 'exemp3', 'exemp4', 'exemp5'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
    
    // config 
    
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    // render init block
    
    const myChart = new Chart(
      ctx, {
        type: 'bar',
      data,
      
      options: {
        parsing: {
          xAxisKey: 'days',
          yAxisKey: 'products.sales'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      } 
    } )
      
    

    function clickHandler(click: any){
        const points = myChart.getElementsAtEventForMode(click, 'nearest',
         { intersect: true }, true);

         if (points.length) {
             const firstPoint = points[0];
             //console.log(points)
             console.log(firstPoint)
             const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
             console.log(value.products.link);
             //location.href = value.products.link;
             window.open(value.products.link);

         }

    }
    ctx.onclick = clickHandler;
  }
   
  
  

}
