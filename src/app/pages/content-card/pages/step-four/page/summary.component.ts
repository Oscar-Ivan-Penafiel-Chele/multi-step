import { Component, inject } from '@angular/core';
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
 
  private menuService = inject(MenuService);
  private routesService = inject(RoutesService)

  constructor(private _router: Router){}

  goPlan(){
    const index = this.getIndexRoute();

    this.menuService.activeItem(index);
    this._router.navigate([`/${this.route}`]);
  }

  getIndexRoute(): number{
    return this.routesService.getIndexRouteForString(this.route);
  }
}
