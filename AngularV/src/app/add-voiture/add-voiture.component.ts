import { Marque } from './../model/marque.model';
import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/Voiture.model';
import { VoitureService } from '../services/Voiture.service';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-add-Voiture',
  templateUrl: './add-Voiture.component.html',
  styleUrls: ['./add-Voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
newVoiture = new Voiture();
marques : Marque[]= [];
newIdMar! : number;
newMarque! : Marque;
marque! : any;
uploadedImage!: File;
imagePath: any;



  constructor(private voitureService: VoitureService,
              private router :Router) { }

  ngOnInit(): void {
     /*this.voitureService.listeMarques();*/
     this.voitureService.listeMarques().
     subscribe(marques => {this.marque = marques;
     console.log(marques);
     });
     
     }


  
  /*addVoiture() {
  
    this.voitureService.consulterMarque(this.newIdMar);
    this.newVoiture.marque = this.newMarque;
    this.voitureService.ajouterVoiture(this.newVoiture);
    this.router.navigate(['Voiture']);
    }*/

    // ajouterVoiture() {
    //   const marque = this.marque.find(marque => marque.idMarque == this.newIdMar)!;
    //   this.newVoiture.marque = marque;
    //   this.voitureService.ajouterVoiture(this.newVoiture).subscribe(Voiture => {
    //     console.log(Voiture);
    //     this.router.navigate(['Voiture']);
    //   });
    // }

    // ajouterVoiture() {
    //   this.voitureService
    //   .uploadImage(this.uploadedImage, this.uploadedImage.name)
    //   .subscribe((img: Image) => {
    //   this.newVoiture.image=img;
    //   const marque = this.marque.find(marque => marque.idMarque == this.newIdMar)!;
    //   this.newVoiture.marque = marque;
      
    //   this.voitureService.ajouterVoiture(this.newVoiture).subscribe(Voiture => {
    //     console.log(Voiture);
    //     this.router.navigate(['Voiture']);
    //   });
    // });

    // }

    ajouterVoiture(){
      this.voitureService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
      this.imagePath=img.idImage;
      console.log(img)
      this.newVoiture.image=img;
      this.newVoiture.marque = this.marque.find(marque => marque.idMarque == this.newIdMar)!;
      this.voitureService
      .ajouterVoiture(this.newVoiture)
      .subscribe(() => {
      this.router.navigate(['Voiture']);
      });
      });

    }
    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
      
    
    


}

