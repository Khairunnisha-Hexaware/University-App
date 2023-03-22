import { Routes } from "@angular/router";

import { AddInformationTechnologyComponent } from "./add-informationTechnology/add-informationTechnology.component";
import { EditInformationTechnologyComponent } from "./edit-informationTechnology/edit-informationTechnology.component";
import { ListInformationTechnologyComponent } from "./list-informationTechnology/list-informationTechnology.component";

export const InformationTechnologyRoutes: Routes = [
  {
    path: "add-informationTechnology",
    component: AddInformationTechnologyComponent,
  },
  {
    path: "edit-informationTechnology/:id",
    component: EditInformationTechnologyComponent,
  },
  {
    path: "list-informationTechnology",
    component: ListInformationTechnologyComponent,
  },
];
