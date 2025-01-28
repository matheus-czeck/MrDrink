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
            import('./modules/dash-board/dash-board.component').then(
                (m)=>m.DashBoardComponent
            ), canActivate: [AuthGuard]
    },
    {
        path: 'menu', 
        loadComponent:()=>
            import('./modules/menu/menu.component').then(
                (m)=>m.MenuComponent
            ), canActivate: [AuthGuard]
    },
    {
        path: 'agendar-eventos',
        loadComponent: ()=>
            import('./modules/agendar-eventos/agendar-eventos.component').then(
                (m)=>m.AgendarEventosComponent
            ), canActivate: [AuthGuard]

    },
    {
        path: 'check-list',
        loadComponent: ()=>
            import('./modules/check-list/check-list.component').then(
                (m)=>m.CheckListComponent
            ), canActivate: [AuthGuard]

    },
    {
        path: 'equipe',
        loadComponent: ()=>
            import('./modules/equipe/equipe.component').then(
                (m)=>m.EquipeComponent
            ), canActivate: [AuthGuard]

    },
    {
        path: 'financeiro',
        loadComponent: ()=>
            import('./modules/financeiro/financeiro.component').then(
                (m)=>m.FinanceiroComponent
            ), canActivate: [AuthGuard]

    }
];
