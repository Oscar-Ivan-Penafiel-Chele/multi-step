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
  location: Location;

  constructor(private _menuService: MenuService, private router: Router, location: Location){
    const menu = this._menuService.setMenu(); 
    
    this.routes = menu.map(item => item.label);
    this.location = location;
  }

  back(): void{
    this.handleAction(this.ACTION_BACK);
  }

  next(): void{
    this.handleAction(this.ACTION_NEXT);
  }

  handleAction(action: string){
    const index = this.getIndexRoute(action);
    this._menuService.activeItem(index);

    const route = this.getRoute(action);
    this.router.navigate([route]);
  }

  getRoute(action: string): string{
    const index = this.getIndexRoute(action);
    return this.routes[index];
  }

  getIndexRoute(action: string): number{
    const path = this.location.path().substring(1);
    const index = this.routes.indexOf(path);

    return action == this.ACTION_BACK ? index - 1 : index + 1;
  }
}
