import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureComponent } from './Voiture/Voiture.component';
import { AddVoitureComponent } from './add-Voiture/add-Voiture.component';
import { UpdateVoitureComponent } from './update-Voiture/update-Voiture.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { VoitureGuard } from './Voiture.guard';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { VerificationcodeComponent } from './verificationcode/verificationcode.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
{path: "Voiture", component : VoitureComponent},
{path: 'add-Voiture', component: AddVoitureComponent, canActivate:[VoitureGuard]},
{path: "", redirectTo: "Voiture", pathMatch:"full"},
{path: "updateVoiture/:id", component: UpdateVoitureComponent},
{path: 'updatevoiture/:id',component: UpdateVoitureComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "rechercheParMarque", component : RechercheParMarqueComponent},  
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeUser",component: UsersComponent,canActivate:[VoitureGuard]},
{path: "updateUser/:id",component:UpdateUserComponent},
{path: "verificationcode", component: VerificationcodeComponent},
{path:"ajouterUser",component:AddUserComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
