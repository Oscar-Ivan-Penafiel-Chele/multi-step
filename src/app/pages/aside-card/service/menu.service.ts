import { Injectable } from '@angular/core';
import { ElementsList, ItemMenu } from 'src/app/models';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  protected readonly EMPTY_STRING = '';
  protected readonly CLASS_ACTIVE = 'active';
  location: Location;

  constructor(location: Location) {
    this.location = location;
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

  private getElements(): ElementsList{
    const menu = this.getMenu();
    const items = this.setMenu();
    const path = this.location.path().substring(1);

    return { menu, items, path };
  }

  public activeMenuItem(): void{
    this.inactiveAllItems();
    this.activeItemError();
    this.activeItemForRoute();
  }

  private inactiveAllItems(): void{
    const {menu} = this.getElements();
    
    menu.forEach((item: Element) => {
      let element: Element = item;
      element.children[0].classList.remove(this.CLASS_ACTIVE);
    });
  }

  private activeItemError(): void{
    const { menu, items, path } = this.getElements();

    let findItem = items.find( i => i.label == path) ?? false;

    if(path == this.EMPTY_STRING || !findItem){
      this.activeFirstItem(menu)
      return;
    };
  }

  private activeFirstItem(menu: NodeListOf<Element>): void{
    menu[0].children[0].classList.add(this.CLASS_ACTIVE); 
  }

  private activeItemForRoute(): void{
    const {menu, path} = this.getElements();

    menu.forEach((item: Element) => {
      let element: Element = item;

      if(element.ariaLabel != path) return;
      element.children[0].classList.add(this.CLASS_ACTIVE);
    });
  }

  public activeItem(index: number): void{
    const {menu} = this.getElements();

    this.inactiveAllItems();
    menu[index].children[0].classList.add(this.CLASS_ACTIVE);
  }
}
