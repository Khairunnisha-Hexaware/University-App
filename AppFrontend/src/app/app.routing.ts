import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddElectricalandElectronicsEngineeringComponent } from "./electricalandElectronicsEngineering/add-electricalandElectronicsEngineering/add-electricalandElectronicsEngineering.component";
import { EditElectricalandElectronicsEngineeringComponent } from "./electricalandElectronicsEngineering/edit-electricalandElectronicsEngineering/edit-electricalandElectronicsEngineering.component";
import { ListElectricalandElectronicsEngineeringComponent } from "./electricalandElectronicsEngineering/list-electricalandElectronicsEngineering/list-electricalandElectronicsEngineering.component";
import { AddInformationTechnologyComponent } from "./informationTechnology/add-informationTechnology/add-informationTechnology.component";
import { EditInformationTechnologyComponent } from "./informationTechnology/edit-informationTechnology/edit-informationTechnology.component";
import { ListInformationTechnologyComponent } from "./informationTechnology/list-informationTechnology/list-informationTechnology.component";
import { AddAerospaceEngineeringComponent } from "./aerospaceEngineering/add-aerospaceEngineering/add-aerospaceEngineering.component";
import { EditAerospaceEngineeringComponent } from "./aerospaceEngineering/edit-aerospaceEngineering/edit-aerospaceEngineering.component";
import { ListAerospaceEngineeringComponent } from "./aerospaceEngineering/list-aerospaceEngineering/list-aerospaceEngineering.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
        { path: 'add-electricalandElectronicsEngineering', component: AddElectricalandElectronicsEngineeringComponent },
        { path: 'edit-electricalandElectronicsEngineering/:id', component: EditElectricalandElectronicsEngineeringComponent },
        { path: 'list-electricalandElectronicsEngineering', component: ListElectricalandElectronicsEngineeringComponent },
        { path: 'add-informationTechnology', component: AddInformationTechnologyComponent },
        { path: 'edit-informationTechnology/:id', component: EditInformationTechnologyComponent },
        { path: 'list-informationTechnology', component: ListInformationTechnologyComponent },
        { path: 'add-aerospaceEngineering', component: AddAerospaceEngineeringComponent },
        { path: 'edit-aerospaceEngineering/:id', component: EditAerospaceEngineeringComponent },
        { path: 'list-aerospaceEngineering', component: ListAerospaceEngineeringComponent },
    ]
  }
];
