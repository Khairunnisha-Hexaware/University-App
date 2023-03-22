import { Routes } from "@angular/router";

import { AddElectricalandElectronicsEngineeringComponent } from "./add-electricalandElectronicsEngineering/add-electricalandElectronicsEngineering.component";
import { EditElectricalandElectronicsEngineeringComponent } from "./edit-electricalandElectronicsEngineering/edit-electricalandElectronicsEngineering.component";
import { ListElectricalandElectronicsEngineeringComponent } from "./list-electricalandElectronicsEngineering/list-electricalandElectronicsEngineering.component";

export const ElectricalandElectronicsEngineeringRoutes: Routes = [
  {
    path: "add-electricalandElectronicsEngineering",
    component: AddElectricalandElectronicsEngineeringComponent,
  },
  {
    path: "edit-electricalandElectronicsEngineering/:id",
    component: EditElectricalandElectronicsEngineeringComponent,
  },
  {
    path: "list-electricalandElectronicsEngineering",
    component: ListElectricalandElectronicsEngineeringComponent,
  },
];
