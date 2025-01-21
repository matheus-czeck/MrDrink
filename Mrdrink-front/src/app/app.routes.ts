import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    {
        path: '', redirectTo: "/login",
        pathMatch: "full"
    },
{
    path:"login", 
    loadComponent: ()=>
        import('./modules/login/login.component').then(
            (m)=>m.LoginComponent
        )
        
    },
    {
        path: 'dashboard', 
        loadComponent:()=>
            import('./modules/dashboard/dashboard.component').then(
                (m)=>m.DashboardComponent
            ), canActivate: [AuthGuard]
    },
    {
        path: 'menu', 
        loadComponent:()=>
            import('./modules/menu/menu.component').then(
                (m)=>m.MenuComponent
            ), canActivate: [AuthGuard]
    }

];
