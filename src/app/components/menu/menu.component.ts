import { Component } from '@angular/core';
import { Menu } from './Menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public menuProperties : Array<Menu> = [
    {
      id: '1',
      icon: 'fa-solid fa-gauge',
      titre: 'Tous les clients',
      url: 'tous-les-clients'
    },
    {
      id: '2',
      titre: 'Payements',
      icon: 'fa-solid fa-boxes-stacked',
      url: 'payements'
    },
    {
      id: '3',
      titre: 'Releve de compte',
      icon: 'fa-solid fa-users-line',
      url: 'releve-de-compte'
    },
    {
      id: '4',
      titre: 'Insertions',
      icon: 'fa-solid fa-users-between-lines',
      url: 'insertions'
    }
  ]

  private lastSelectedMenu : Menu | undefined;

  constructor(
    private router: Router
    ) { }

  navigate(menu: Menu){
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }

}
