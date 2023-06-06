import { Component, EventEmitter, Input, Output, effect, inject } from '@angular/core';
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
  @Output() validateData = new EventEmitter();
  
  public isValid: boolean = false;
  protected readonly ACTION_NEXT = 'next';
  protected readonly ACTION_BACK = 'back';
  protected MENU_LENGTH = 0;

  private routesService = inject(RoutesService);
  private footerService = inject(FooterService);

  constructor(){
    this.MENU_LENGTH = this.routesService.getMenuLength();
  }

  protected getIndexRoute(): number{
    return this.routesService.getIndexRoute();
  }

  protected back(): void{
    this.footerService.back();
  }

  protected next(): void{
    this.validateData.emit();
  }

  protected complete(): void{
    this.validateData.emit();
  }
}
