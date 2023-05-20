import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/pages/aside-card/service/menu.service';
import { RoutesService } from 'src/app/shared/services/routes/routes.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  route: string = 'plan';

  constructor(
    private _router: Router, 
    private _menuService: MenuService,
    private _routesService: RoutesService
    ){}

  goPlan(){
    const index = this.getIndexRoute();

    this._menuService.activeItem(index);
    this._router.navigate([`/${this.route}`]);
  }

  getIndexRoute(): number{
    return this._routesService.getIndexRouteForString(this.route);
  }
}
