import { VoitureService } from './../services/Voiture.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/Voiture.model';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  Voitures! : Voiture[];
  idMar! : number;
  marques! : Marque[];
  allVoitures! : Voiture[];


  constructor(private AuthService :AuthService,
    private voitureService : VoitureService) { }

  ngOnInit(): void {
    this.voitureService.listeVoiture();
    //this.marques=this.voitureService.listeMarques();
    
  }
  onKeyUp(filterText : string){
    console.log(filterText);
    this.Voitures = this.allVoitures.filter(item => item.typeVoiture?.toLowerCase().includes(filterText));
    }

}
