import { Marque } from "./marque.model";
import { Image } from "./image.model";

export class Voiture {
    idVoiture? : number;
    typeVoiture? : string;
    price? : number;
    dateMisenService? : Date ;
    couleur? : string;
    capacity? : number;
    marque! : Marque;
    image! : Image;
    imageStr!:string

    }


        