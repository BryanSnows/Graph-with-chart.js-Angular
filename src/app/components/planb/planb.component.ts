import { APP_ID, Component, OnInit } from '@angular/core';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { Chart } from 'node_modules/chart.js';
import { GraphService } from 'src/app/service/graph.service';
import { ApiTeste } from '../../ApiTeste';
import { Hero } from 'src/app/Test';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-planb',
  templateUrl: './planb.component.html',
  styleUrls: ['./planb.component.css']
})
export class PlanbComponent implements OnInit {

    //browserData: ApiTeste[] = [];
  
  constructor(private heroHttpService: GraphService ) {
    
   }

  heroesArray : Array<Hero> = new Array;                
  ngOnInit() {

    
    this.heroHttpService.get()
    .subscribe(
    //sucesso
    heroes => {
    this.heroesArray.push(...heroes);
    },
    //erro
    error => {
    console.log("Deu ruim: "+ error);
    });

   // console.log(this.heroesArray);

    const dataBrowser = this.heroesArray

  
    const browserData  =  [
      {  
          browser: 'Físico',
          color: 'rgba(247, 199, 74)',
          marketshare: 3,
          versionData: [
            { version: 'Dor/Desconforto', users: 4.5 },
            { version: 'Energia/fadiga', users: 4 },
            { version: 'Sono e Repouso', users: 3.5 },
            { version: 'Mobilidade', users: 5 },
            { version: 'Vida Cotidiana', users: 4 },
          ],
      },
      {
          browser: 'Social',
          color: 'rgba(247, 199, 74)',
          marketshare: 4,
          versionData: [
              { version: 'Relações Pessoais', users: 4.5 },
              { version: 'Suporte Social', users: 4 },
              { version: 'Atividade Sexual', users: 4 },
          ],
      },
      {
          browser: 'Psicológico',
          color: 'rgba(247, 199, 74)',
          marketshare: 3.5,
          versionData: [
              { version: 'Sentimentos Positivos', users: 4 },
              { version: 'Auto Estima', users: 4.5 },
              { version: 'Sentimentos Negativos', users: 3.5 },
          ],
      },
      {
          browser: 'Ambiental',
          color: 'rgba(247, 199, 74)',
          marketshare: 4.5,
          versionData: [
              { version: 'Ambiente no Lar', users: 4 },
              { version: 'Recursos Financeiros', users: 4.5 },
              { version: 'Ambiente Fisico', users: 3.5 },
          ],
      }, 
  ];
 // console.log(dataBrowser[0].color)
 // console.log(browserData[0].color)
  const browserData2 = [
    {
        browser: 'Físico',
        color: 'rgba(120, 245, 164)',
        marketshare: 1,
        versionData: [
            { version: 'Dor/Desconforto', users: 2.5 },
            { version: 'Energia/fadiga', users: 2 },
            { version: 'Sono e Repouso', users: 1.5 },
            { version: 'Mobilidade', users: 2 },
            { version: 'Vida Cotidiana', users: 1 },    
        ],
    },
    {
        browser: 'Social',
        color: 'rgba(120, 245, 164)',
        marketshare: 1,
        versionData: [
            { version: 'Relações Pessoais', users: 4.5 },
            { version: 'Suporte Social', users: 4 },
            { version: 'Atividade Sexual', users: 4 },
        ],
    },
    {
        browser: 'Psicológico',
        color: 'rgba(120, 245, 164)',
        marketshare: 1,
        versionData: [
            { version: 'Sentimentos Positivos', users: 4 },
            { version: 'Auto Estima', users: 4.5 },
            { version: 'Sentimentos Negativos', users: 3.5 },
        ],
    },
    {
        browser: 'Ambiental',
        color: 'rgba(120, 245, 164)',
        marketshare: 1,
        versionData: [
            { version: 'Ambiente no Lar', users: 4 },
            { version: 'Recursos Financeiros', users: 4.5 },
            { version: 'Ambiente Fisico', users: 3.5 },
        ],
    }, 
];

const browserData3 = [
  {
      browser: 'Físico',
      color: 'rgba(119, 249, 251)',
      marketshare: 2,
      versionData: [
          { version: 'Dor/Desconforto', users: 4.5 },
          { version: 'Energia/fadiga', users: 4 },
          { version: 'Sono e Repouso', users: 3.5 },
          { version: 'Mobilidade', users: 5 },
          { version: 'Vida Cotidiana', users: 4 },
      ],
  },
  {
      browser: 'Social',
      color: 'rgba(119, 249, 251)',
      marketshare: 2,
      versionData: [
          { version: 'Relações Pessoais', users: 4.5 },
          { version: 'Suporte Social', users: 4 },
          { version: 'Atividade Sexual', users: 4 },
      ],
  },
  {
      browser: 'Psicológico',
      color: 'rgba(119, 249, 251)',
      marketshare: 2,
      versionData: [
          { version: 'Sentimentos Positivos', users: 4 },
          { version: 'Auto Estima', users: 4.5 },
          { version: 'Sentimentos Negativos', users: 3.5 },
      ],
  },
  {
      browser: 'Ambiental',
      color: 'rgba(119, 249, 251)',
      marketshare: 2,
      versionData: [
          { version: 'Ambiente no Lar', users: 4 },
          { version: 'Recursos Financeiros', users: 4.5 },
          { version: 'Ambiente Fisico', users: 3.5 },
      ],
  }, 
];

 
  // setup 
  //console.log(browserData[0].color, dataBrowser)
  const data = {
      //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
          label: 'Geral',
          data: browserData,
          borderRadius: Number.MAX_VALUE,
          backgroundColor: [
              browserData[0].color,
              browserData[1].color,
              browserData[2].color
          ],
          borderColor: [
              browserData[0].color,
              browserData[1].color,
              browserData[2].color
          ],
          borderWidth: 1,
      }, {
        label: 'Homens',
        data: browserData2,
        borderRadius: Number.MAX_VALUE,
        backgroundColor: [
            browserData2[0].color,
            browserData2[1].color,
            browserData2[2].color
        ],
        borderColor: [
            browserData2[0].color,
            browserData2[1].color,
            browserData2[2].color
        ],
        borderWidth: 1,
    }, {
      
      label: 'Mulheres',
      data: browserData3,
      borderRadius: Number.MAX_VALUE,
      backgroundColor: [
          browserData3[0].color,
          browserData3[1].color,
          browserData3[2].color
      ],
      borderColor: [
          browserData3[0].color,
          browserData3[1].color,
          browserData3[2].color
      ],
      borderWidth: 1
  }, 
    ]
  };

  // config 
  


  // render init block
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const myChart = new Chart(
    ctx,
    {
      type: 'bar',
      data,
      options: {
        onHover: (event, chartElement) => {
          if (myChart.data.datasets[0].label === 'Geral') {
            (event.native!.target  as HTMLInputElement).style.cursor = chartElement[0] ? 'pointer' : 'default' ;
            
            
          } else {
            (event.native!.target  as HTMLInputElement).style.cursor = 'default';
          };
        },
        parsing: {
          xAxisKey: 'browser',
          yAxisKey: 'marketshare'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  )

  function changeChart(browser: number) {
    //console. log (value+'grabbed from clickhandler function')
    //myChart.options.parsing!.xAxiskey = 'versionData.version';
    //myChart.options.parsing!.yAxiskey = 'versionData.users';
    const vColor:any = [];
    const vUsers:any = [];
    const vLabels = browserData[browser].versionData.map(labels => {
        vColor.push(browserData[browser].color);
        vUsers.push(labels.users);
        return labels.version;
    })
    myChart.config.data.datasets[0].data = vUsers;
    myChart.config.data.labels = vLabels;
    myChart.config.data.datasets[0].backgroundColor = vColor;
    myChart.config.data.datasets[0].borderColor = vColor;
    myChart.config.data.datasets[0].label = browserData[browser].browser;
    myChart.update();


    const vColor2:any = [];
    const vUsers2:any = [];
    const vLabels2 = browserData2[browser].versionData.map(labels => {
        vColor2.push(browserData2[browser].color);
        vUsers2.push(labels.users);
        return labels.version;
    })
    myChart.config.data.datasets[1].data = vUsers2;
    myChart.config.data.labels = vLabels2;
    myChart.config.data.datasets[1].backgroundColor = vColor2;
    myChart.config.data.datasets[1].borderColor = vColor2;
    myChart.config.data.datasets[1].label = browserData2[browser].browser;
    myChart.update();



    const vColor3:any = [];
    const vUsers3:any = [];
    const vLabels3 = browserData3[browser].versionData.map(labels => {
        vColor3.push(browserData3[browser].color);
        vUsers3.push(labels.users);
        return labels.version;
    })
    myChart.config.data.datasets[2].data = vUsers3;
    myChart.config.data.labels = vLabels3;
    myChart.config.data.datasets[2].backgroundColor = vColor3;
    myChart.config.data.datasets[2].borderColor = vColor3;
    myChart.config.data.datasets[2].label = browserData3[browser].browser;
    myChart.update();
}
  function clickHandler(click: Event){
      if(myChart.data.datasets[0].label === 'Geral') {

          const bar = myChart.getElementsAtEventForMode(click, 'nearest', {intersect
                  : true }, true);
          console.log(bar);
          if (bar.length) {
              console.log(bar[0].index);
              changeChart(bar[0].index);
          };
      };

  };

  ctx.onclick = clickHandler;
  }

 /* getAnimals(): void {
      this.service.getAll().subscribe((browserData) => (this.browserData = browserData));
      this.service.getAll().subscribe((browserData)  => console.log(browserData));
     
  }*/




}
