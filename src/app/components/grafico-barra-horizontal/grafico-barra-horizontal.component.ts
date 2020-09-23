import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  result: any[]  = [
    {
      "name": "Juego1",
      "value": 10
    },
    {
      "name": "Juego2",
      "value": 30
    },
    {
      "name": "Juego3",
      "value": 50
    },
    {
      "name": "Juego4",
      "value": 35
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  //intervalo; 

  constructor() {

    /*this.intervalo = setInterval(()=>{
      const newResults = [...this.result];

      for(let i in newResults){
        newResults[i].value = Math.round( Math.random() * 500 );
      }
      this.result = [...newResults];
    }, 1500)*/
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    //clearInterval(this.intervalo);
  }

}
