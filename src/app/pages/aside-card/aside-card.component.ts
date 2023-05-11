import { AfterViewInit, Component } from '@angular/core';
import { ItemMenu } from 'src/app/models';
import { MenuService } from './service/menu.service';

@Component({
  selector: 'menu-card',
  templateUrl: './aside-card.component.html',
  styleUrls: ['./aside-card.component.scss']
})
export class AsideCardComponent implements AfterViewInit{
  protected items_menu: ItemMenu[] = [];

  constructor(public _menuService: MenuService){
    this.setMenu();
  }

  ngAfterViewInit(): void {
    this.activeItem();
  }

  setMenu(): void{
    this.items_menu = this._menuService.setMenu();
  }

  activeItem(): void{
    this._menuService.activeMenuItem();
  }
}
