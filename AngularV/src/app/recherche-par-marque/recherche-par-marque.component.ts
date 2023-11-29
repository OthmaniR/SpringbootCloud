import { VoitureService } from './../services/Voiture.service';
import { AuthService } from './../services/auth.service';
import { Voiture } from './../model/Voiture.model';
import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  Voitures : Voiture[] =[];
  marques! : Marque[];
  IdMarque! : number;
supprimerVoiture(_t12: any) {
throw new Error('Method not implemented.');
}
authService: any;

  constructor(public AuthService:AuthService,
    private voitureService:VoitureService,private http: HttpClient) { }

  ngOnInit(): void {
    //this.Voitures=this.voitureService.listeVoiture();
    /*this.voitureService.listeMarques();*/
  }
  /*onChange() {
    this.voitureService.rechercherParMarque(this.IdMarque);
    }*/

}
