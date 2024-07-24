import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { StartComponent } from '../pages/start/start.component';
import { GamreComponent } from '../pages/gamre/gamre.component';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'start', component: StartComponent},
    {path: 'game', component: GamreComponent},

];
