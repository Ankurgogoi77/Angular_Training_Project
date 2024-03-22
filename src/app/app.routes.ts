import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { authGuard } from './services/auth.guard';
//import { LogoutComponent } from './auth/logout.component';

export const routes: Routes = [
    {path:"", redirectTo: "home", pathMatch: "full"},
    {path:"home", component: HomeComponent},
    {path:"dashboard", canActivate:[ authGuard ], component: DashboardComponent, children: [
        {path:"", redirectTo: "products", pathMatch: "full"},
        {path:"users", component: ManageUsersComponent},
        {path:"products", component: ManageProductsComponent}
    ]},
    {path:"register", component: RegisterComponent},
    {path:"login", component: LoginComponent},
    //{path:"logout", component: LogoutComponent},
    {path: "logout", canActivate:[ authGuard ], loadComponent:  () => import("./auth/logout.component").then((f) => f.LogoutComponent)},
    {path:"**", component: NotFoundComponent},
];
