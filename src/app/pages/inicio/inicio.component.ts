import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private db: AngularFirestore ) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe( //trasformamos respuesta pasando por el pipe
        map( (resp: Game[]) =>  resp.map( ({ name, votos }) => ({ name, value: votos }) ))//mediantes destructuracion modificamos el arreglo
          //segunda manera
          /*return resp.map( juego => {
            return {
              name: juego.name,
              value: juego.votos
            }
          })*/
      )
      .subscribe( juegos => {
        
        this.juegos = juegos;

      } )
  }

}
