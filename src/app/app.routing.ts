import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./modules/about/about.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { HomeComponent } from "./modules/home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
   { path: "", component: HomeComponent },
   { path: "home", component: HomeComponent },
   { path: "about", component: AboutComponent },
   { path: "contact", component: ContactComponent },
   { path: "**", component: NotFoundComponent },
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRouting { }