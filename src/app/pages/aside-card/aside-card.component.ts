import { AfterViewInit, Component, inject } from '@angular/core';
import { ItemMenu } from 'src/app/models';
import { MenuService } from './service/menu.service';

@Component({
  selector: 'menu-card',
  templateUrl: './aside-card.component.html',
  styleUrls: ['./aside-card.component.scss']
})
export class AsideCardComponent implements AfterViewInit{
  protected items_menu: ItemMenu[] = [];
  protected menuService = inject(MenuService)

  constructor(){
    this.setMenu();
  }

  ngAfterViewInit(): void {
    this.activeItem();
  }

  setMenu(): void{
    this.items_menu = this.menuService.setMenu();
  }

  activeItem(): void{
    this.menuService.activeMenuItem();
  }
}
