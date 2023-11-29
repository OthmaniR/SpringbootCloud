import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/Voiture.model';
import { Marque } from '../model/marque.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Image } from '../model/image.model';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class VoitureService {

  apiURL: string = 'http://localhost:9191/voiture-service/Voitures/api';
  apiURLMar: string = 'http://localhost:9191/voiture-service/Voitures/api/marque';
  apiURLUser: String ='http://localhost:9191/users-service/users'
  /*Voitures : Voiture[];*/
  Voiture! : Voiture;
  user! : User;
  marques! : Marque[];
  voitureRecherche! : Voiture[];
 
  

constructor(private router: Router, private authService: AuthService, private http: HttpClient ) {
  /*this.marques =[ 
      {idMar :1, nomMar : "Iveco Voiture"},
      {idMar :2, nomMar : "Mercedes-Benz"}];*/
  /*this.Voitures = [
      {idVoiture :1, nomVoiture : "single-decker", prixVoiture :110000000.000, dateCreation : new Date("01/14/2011"),marque : {idMar : 1, nomMar : "Iveco Voiture"}},
      {idVoiture :2, nomVoiture : "double-decker", prixVoiture :150000000.000, dateCreation : new Date("01/14/2011"),marque : {idMar : 2, nomMar : "Mercedes-Benz"}},
      {idVoiture :3, nomVoiture : "minivoiturees", prixVoiture :120000000.000, dateCreation : new Date("01/14/2011"),marque : {idMar : 1, nomMar : "Iveco Voiture"}},
      {idVoiture :4, nomVoiture : "schoolvoiture", prixVoiture :100000000.000, dateCreation : new Date("01/14/2011"),marque : {idMar : 2, nomMar : "Mercedes-Benz"}}
  ];*/
  }

    

listeVoiture(): Observable<Voiture[]>{
  /*let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
  return this.http.get<Voiture[]>(this.apiURL+"/all");
}


ajouterVoiture( Voiture: Voiture):Observable<Voiture>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Voiture>(this.apiURL+"/addvoiture", Voiture, {headers:httpHeaders});
}
    

supprimerVoiture(id : number) {
    const url = `${this.apiURL}/delvoiture/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
}
    
    
consulterVoiture(id: number): Observable<Voiture> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Voiture>(url,{headers:httpHeaders});
}


updateVoiture(Voiture :Voiture) : Observable<Voiture> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Voiture>(this.apiURL+"/updatevoiture", Voiture, {headers:httpHeaders});
}


listeMarques():Observable<Marque>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Marque>(this.apiURLMar+"/all",{headers:httpHeaders}
  );
}

ajouterMarque(mar: Marque):Observable<Marque>{
  return this.http.post<Marque>(this.apiURLMar+"/addmar", mar);
}


consulterMarque(id: number): Observable<Marque>{
  const url = `${this.apiURL}/getbyid/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<Marque>(url,{headers:httpHeaders});
}

uploadImage(file: File, filename: string): Observable<Image>{
  const imageFormData = new FormData();
  imageFormData.append('image', file, filename);
  const url = `${this.apiURL + '/image/upload'}`;
  return this.http.post<Image>(url, imageFormData);
  }
  loadImage(id: number): Observable<Image> {
  const url = `${this.apiURL + '/image/get/info'}/${id}`;
  return this.http.get<Image>(url);
  }
  


rechercherParMarque(idMar: number): Observable<Voiture[]> {
  const url = `${this.apiURLMar}/voituremarque/${idMar}`;
    return this.http.get<Voiture[]>(url);
}


rechercherParNom(name: string):Observable< Voiture[]> {
  const url = `${this.apiURL}/nomMarque/${name}`;
    return this.http.get<Voiture[]>(url);
}

listeUser():Observable<User[]>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<User[]>(this.apiURLUser+"/all",{headers:httpHeaders});
}

ajouterUser(user: { password: any; confirmPassword: any; email: any; username: any }): Observable<User> {
    return this.http.post<User>(this.apiURLUser + "/addUser", user);
}


supprimerUser(id : number) {
  const url = `${this.apiURLUser +"/deleteUser"}/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.delete(url, {headers:httpHeaders});
}

consulterUser(id: number): Observable<User> {
  const url = `${this.apiURLUser +"/getUser"}/${id}`;
  return this.http.get<User>(url);
}

addRoleToUser(id: number, role: Role) {
  const url = `${this.apiURLUser}/addRole/${id}`;
  return this.http.post(url, role);
}

getAllRoles() {
  return this.http.get<Role[]>(this.apiURLUser + '/allRoles');
}
getRoleById(id: number) {
  return this.http.get<Role>(this.apiURLUser + '/role/' + id);
}

removeRoleFromUser(id: number, role: Role) {
  const url = `${this.apiURLUser }/removeRole/${id}`;
  return this.http.post(url, role);
}
getUserById(id: number) {
  return this.http.get<User>(this.apiURLUser + '/getUser/' + id);
}

activateUser(username: string, verificationCode: string): Observable<User> {
  const url = `${this.apiURLUser}/activateUser/${username}/${verificationCode}`;
  const body = { verification_code: verificationCode };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  console.log(url);
  return this.http.post<User>(url, { headers });
}









/*ajouterVoiture( Voitures: Voiture){
  this.Voitures.push(Voitures);
  this.router.navigate(['/', 'Voiture'])
}
supprimerVoiture( b: Voiture){
  //supprimer le produit p du tableau Voiture
  const index = this.Voitures.indexOf(b,0);
  if (index > -1){
    this.Voitures.splice(index,1);
  }
}
consulterVoiture(id:number): Voiture{
 return this.Voiture = this.Voitures.find(b => b.idVoiture == id)!;

}

trierVoiture(){
  this.Voitures = this.Voitures.sort((n1,n2) => {
  if (n1.idVoiture! > n2.idVoiture!) {return 1;}
  if (n1.idVoiture! < n2.idVoiture!) {return -1;}
  return 0;
  });
  }
  updateVoiture(b:Voiture)
  {
  // console.log(p);
  this.supprimerVoiture(b);
  this.ajouterVoiture(b);
  this.trierVoiture();

  }
  listeMarques():Marque[] {
    return this.marques;
    }

  consulterMarque(id:number): Marque{
    return this.marques.find(mar => mar.idMar == id)!;
    }
  rechercherParMarque(idMar : number): Voiture[]{
    this.voitureRecherche = [];
      
    this.Voitures.forEach((cur,index) =>{
      if (idMar == cur.marque?.idMar){
        console.log("cur "+cur);
        this.voitureRecherche.push(cur);
      }
    });
    return this.voitureRecherche;
    
}*/
}






