import { Injectable } from '@angular/core';
import { ItemMenu } from 'src/app/models';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  protected path: string = "";

  constructor(protected location: Location) {
    this.path = location.path().substring(1);
   }

  public setMenu(): ItemMenu[]{
    return [
      {
        id: '1',
        name: 'step 1',
        title: 'your info',
        label: 'personal-information'
      },
      {
        id: '2',
        name: 'step 2',
        title: 'select plan',
        label: 'plan'
      },
      {
        id: '3',
        name: 'step 3',
        title: 'add-ons',
        label: 'add-ons'
      },
      {
        id: '4',
        name: 'step 4',
        title: 'summary',
        label: 'summary'
      }
    ];
  }

  private getMenu(): NodeListOf<Element>{
    const menu: NodeListOf<Element> = document.querySelectorAll('.item__menu');
    return menu;
  }

  public activeMenuItem(){
    const menu = this.getMenu();
    const items = this.setMenu();

    let findItem = items.find( i => i.label == this.path) ?? false;

    this.inactiveAllItems(menu);

    // Activa el primer step si la ruta esta vacia O si la ruta ingresada no existe
    if(this.path == '' || !findItem) {
      menu[0].children[0].classList.add('active'); 
      return;
    }

    menu.forEach((item: Element) => {
      let element: Element = item;

      // Si el step no pertenece a la ruta retorna
      if(element.ariaLabel != this.path) return;

      // Si el step pertenece a la ruta, se activa
      element.children[0].classList.add('active');
    });
  }

  private inactiveAllItems(menu: NodeListOf<Element>){
    menu.forEach((item: Element) => {
      let element: Element = item;
      element.children[0].classList.remove('active');
    });
  }
}
