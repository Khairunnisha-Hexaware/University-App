import { Routes } from "@angular/router";

import { AddAerospaceEngineeringComponent } from "./add-aerospaceEngineering/add-aerospaceEngineering.component";
import { EditAerospaceEngineeringComponent } from "./edit-aerospaceEngineering/edit-aerospaceEngineering.component";
import { ListAerospaceEngineeringComponent } from "./list-aerospaceEngineering/list-aerospaceEngineering.component";

export const AerospaceEngineeringRoutes: Routes = [
  {
    path: "add-aerospaceEngineering",
    component: AddAerospaceEngineeringComponent,
  },
  {
    path: "edit-aerospaceEngineering/:id",
    component: EditAerospaceEngineeringComponent,
  },
  {
    path: "list-aerospaceEngineering",
    component: ListAerospaceEngineeringComponent,
  },
];
