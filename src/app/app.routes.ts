import { Routes } from '@angular/router';

//Age
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientService } from './services/add-client/add-client.service';
import { RegisterComponent } from './pages/register/register.component';
import {LolComponent} from './lol/lol.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'addclient', component: AddClientComponent },
    { path: 'register', component: RegisterComponent},
    {path: 'lol', component:LolComponent},
    
    //404
    { path: '**', component: NoPageComponent },
];

export class AppRoutingModule {}
