import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesService } from 'src/app/shared/services/routes/routes.service';
import { FooterService } from '../service/footer.service';
import { ValidatorsService } from 'src/app/shared/services/validations/validators.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'footer-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss']
})
export class FooterContentComponent {
  @Input() nameComponent!: Component;
 isValid: boolean = false;
  @Output() validateData = new EventEmitter();

  protected readonly ACTION_NEXT = 'next';
  protected readonly ACTION_BACK = 'back';
  protected MENU_LENGTH = 0;

  constructor(
    private _routesService: RoutesService, 
    private _footerService: FooterService,
    private _validatorService: ValidatorsService
  ){
    this.MENU_LENGTH = _routesService.getMenuLength();
  }

  protected back(): void{
    this._footerService.back();
  }

  protected next(): void{
    this.validateData.emit();
    
    this._validatorService.validator$.subscribe((response: boolean) =>{
      this.isValid = response;
    })

    if(!this.isValid) return;
    this._footerService.next();
  }

  protected getIndexRoute(): number{
    return this._routesService.getIndexRoute();
  }

  protected complete(): void{

  }
}
