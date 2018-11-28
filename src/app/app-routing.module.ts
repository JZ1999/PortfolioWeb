import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { ClassesComponent } from "./classes/classes.component";
import { ContactComponent } from "./contact/contact.component";
import { CurriculumComponent } from "./curriculum/curriculum.component";
import { IntroComponent } from "./intro/intro.component";
import { ProjectsComponent } from "./projects/projects.component";
// import {CurriculumComponent} from './curriculum/curriculum.component';

const routes: Routes = [
  {
    path: "",
    component: IntroComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "classes",
    component: ClassesComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "curriculum",
    component: CurriculumComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
