import { Component , Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/pages/aside-card/service/menu.service';
import { RoutesService } from 'src/app/shared/services/routes/routes.service';
import { Plan } from 'src/app/models';
import { ContentService } from 'src/app/pages/content-card/service/content.service';
import { PlanService } from 'src/app/pages/content-card/pages/step-two/service/plan.service';
import { SummaryService } from '../../../../../service/summary.service';

@Component({
  selector: 'header-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent {
  private route: string = 'plan';
  
  private contentService = inject(ContentService);
  private menuService = inject(MenuService);
  private routesService = inject(RoutesService);
  private planService = inject(PlanService);
  private summaryService = inject(SummaryService);

  protected plan: Plan = this.contentService.informationStep().plan!; 
  protected statusPlan: boolean = false;

  constructor(private _router: Router){
    this.statusPlan = this.planService.getStatusValue(this.summaryService.getSubscription());
  }

  goPlan(){
    const index = this.getIndexRoute();

    this.menuService.activeItem(index);
    this._router.navigate([`/${this.route}`]);
  }

  getIndexRoute(): number{
    return this.routesService.getIndexRouteForString(this.route);
  }
}
