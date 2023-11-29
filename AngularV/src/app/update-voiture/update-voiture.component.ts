import { Marque } from './../model/marque.model';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/Voiture.service';
import { Voiture } from '../model/Voiture.model';
import { Image } from '../model/image.model';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-update-Voiture',
templateUrl: './update-Voiture.component.html',
styles: []
})
export class UpdateVoitureComponent implements OnInit {
 
currentVoiture = new Voiture();
marques : Marque[]= [];
updatedMarId! : number;
marque! : any;
myImage! : string;
uploadedImage!: File;
isImageUpdated: Boolean=false;






constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private voitureService: VoitureService) { }

  ngOnInit() {

    this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
 subscribe( Voiture =>{ this.currentVoiture = Voiture; } ) ;


    this.voitureService.listeMarques().
    subscribe(marques => {this.marque = marques;
    console.log(marques);
    });
    this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
    subscribe( marques =>{ this.currentVoiture = marques;
    this.updatedMarId =
    this.currentVoiture.marque.idMarque;

    this.voitureService
    .loadImage(this.currentVoiture.image.idImage)
    .subscribe((img: Image) => {
    this.myImage = 'data:' + img.type + ';base64,' + img.image;
    }); 
    } ) ;
  }

//     onImageUpload(event: any) {
//       if(event.target.files && event.target.files.length) {
//       this.uploadedImage = event.target.files[0];
//       this.isImageUpdated =true;
//       const reader = new FileReader();
//       reader.readAsDataURL(this.uploadedImage);
//       reader.onload = () => { this.myImage = reader.result as string; };
//       }
//       }
      








//  }

//   updateVoiture() {
//     this.currentVoiture.marque = this.marque.find(marque => marque.idMarque == this.updatedMarId)!;
//       //tester si l'image du produit a été modifiée
//       if (this.isImageUpdated)!
//       {
//       this.voitureService
//       .uploadImage(this.uploadedImage, this.uploadedImage.name)
//       .subscribe((img: Image) => {
//       this.currentVoiture.image = img;
//       this.voitureService
//       .updateProduit(this.currentVoiture)
//       .subscribe((marque) => {
//       this.router.navigate(['Voiture']);
//       });
//       });
//       }
//       else{
//       this.voitureService
//       .updateProduit(this.currentVoiture)
//       .subscribe((marque) => {
//       this.router.navigate(['Voiture']);
//       });
//       }


      updateVoiture() {
        this.currentVoiture.marque = this.marque.find(marque => marque.idMarque === this.updatedMarId)!;
        
        // Tester si l'image du produit a été modifiée
        if (this.isImageUpdated) {
          this.voitureService.uploadImage(this.uploadedImage, this.uploadedImage.name)
            .subscribe((img: Image) => {
              this.currentVoiture.image = img;
              this.currentVoiture.marque = this.marque.find(marque => marque.idMarque == this.updatedMarId)!;
              this.voitureService.updateVoiture(this.currentVoiture)
                .subscribe((marque) => {
                  this.router.navigate(['Voiture']);
                });
            });
        } else {
          this.voitureService.updateVoiture(this.currentVoiture)
            .subscribe((marque) => {
              this.router.navigate(['Voiture']);
            });
        
      }
    }

      onImageUpload(event: any) {
        if (event.target.files && event.target.files.length) {
          this.uploadedImage = event.target.files[0];
          this.isImageUpdated = true;
          const reader = new FileReader();
          reader.readAsDataURL(this.uploadedImage);
          reader.onload = () => { this.myImage = reader.result as string; };
        }
      }
      
      
    
}
    

