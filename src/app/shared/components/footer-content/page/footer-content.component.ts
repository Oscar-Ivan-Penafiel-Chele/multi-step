import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesService } from 'src/app/shared/services/routes/routes.service';
import { FooterService } from '../service/footer.service';

@Component({
  selector: 'footer-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss']
})
export class FooterContentComponent {
  @Input() nameComponent!: Component;
  @Input() method: string = '';

  protected readonly ACTION_NEXT = 'next';
  protected readonly ACTION_BACK = 'back';
  protected MENU_LENGTH = 0;

  constructor(private _routesService: RoutesService, private _footerService: FooterService){
    this.MENU_LENGTH = _routesService.getMenuLength();
  }

  protected back(): void{
    this._footerService.back();
  }

  protected next(): void{
    // if(!false) return;
    
    this._footerService.next();
  }

  protected getIndexRoute(): number{
    return this._routesService.getIndexRoute();
  }

  protected complete(): void{}
}
