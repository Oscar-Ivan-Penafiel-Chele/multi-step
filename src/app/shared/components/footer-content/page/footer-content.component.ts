import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MenuService } from 'src/app/pages/aside-card/service/menu.service';
import { ItemMenu } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss']
})
export class FooterContentComponent {
  protected readonly routes: string[] = [];
  protected readonly ACTION_NEXT = 'next';
  protected readonly ACTION_BACK = 'back';
  protected MENU_LENGTH = 0;
  location: Location;

  constructor(private _menuService: MenuService, private router: Router, location: Location){
    const menu = this._menuService.setMenu(); 
    
    this.routes = menu.map(item => item.label);
    this.MENU_LENGTH = this.routes.length - 1;
    this.location = location;
  }

  protected back(): void{
    this.handleAction(this.ACTION_BACK);
  }

  protected next(): void{
    this.handleAction(this.ACTION_NEXT);
  }

  private handleAction(action: string): void{
    const index = this.getIndexRouteOfAction(action);
    this._menuService.activeItem(index);

    const route = this.getRoute(action);
    this.router.navigate([route]);
  }

  private getRoute(action: string): string{
    const index = this.getIndexRouteOfAction(action);
    return this.routes[index];
  }

  protected getIndexRoute(): number{
    const path = this.location.path().substring(1);
    const index = this.routes.indexOf(path);

    return index;
  }

  private getIndexRouteOfAction(action: string): number{
    const index = this.getIndexRoute();

    return action == this.ACTION_BACK ? index - 1 : index + 1;
  }

  protected complete(): void{
    alert("Completado");
  }
}
