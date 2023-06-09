import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'home', name: 'Entities', type: 'link', icon: 'web' },
    { state: 'list-electricalandElectronicsEngineering', name: 'ElectricalandElectronicsEngineering', type: 'link', icon: 'view_list' },
    { state: 'list-informationTechnology', name: 'InformationTechnology', type: 'link', icon: 'view_list' },
    { state: 'list-aerospaceEngineering', name: 'AerospaceEngineering', type: 'link', icon: 'view_list' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
