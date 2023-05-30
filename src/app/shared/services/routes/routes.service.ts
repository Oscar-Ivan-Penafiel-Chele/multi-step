import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/pages/aside-card/service/menu.service';
import { ValidatorsService } from 'src/app/shared/services/validations/validators.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  location: Location;
  protected routes: string[] = [];
  protected readonly ACTION_NEXT = 'next';
  protected readonly ACTION_BACK = 'back';
  
  constructor(
    private _menuService: MenuService, 
    private router: Router, 
    location: Location,
  ) { 
    this.location = location;
    this.setRoutes();
  }

  setRoutes(): void{
    const menu = this._menuService.setMenu(); 
    this.routes = menu.map(item => item.label);
  }

  getMenuLength(): number{
    return this.routes.length - 1;
  }
  
  public handleAction(action: string): void{
    const index = this.getIndexRouteOfAction(action);
    this._menuService.activeItem(index);

    const route = this.getRoute(action);
    this.router.navigate([route]);
  }

  private getRoute(action: string): string{
    const index = this.getIndexRouteOfAction(action);
    return this.routes[index];
  }

  public getIndexRoute(): number{
    const path = this.location.path().substring(1);
    const index = this.routes.indexOf(path);

    return index;
  }

  private getIndexRouteOfAction(action: string): number{
    const index = this.getIndexRoute();

    return action == this.ACTION_BACK ? index - 1 : index + 1;
  }

  public getIndexRouteForString(route: string): number{
    return this.routes.indexOf(route);
  }

}
