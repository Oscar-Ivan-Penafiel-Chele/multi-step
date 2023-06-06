import { Component, inject } from '@angular/core';
import { AddOnsService } from '../service/add-ons.service';
import { ContentService } from '../../../service/content.service';
import { AddOn } from 'src/app/models';
import { FooterService } from 'src/app/shared/components';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent {
  private NAME_OF_COMPONENT: string = 'addOns';
  protected submitted: boolean = false;
  
  private addOnService = inject(AddOnsService);
  private contentService = inject(ContentService);
  private footerService = inject(FooterService);

  validate(){
    const addOns: AddOn[] = this.addOnService.addOnsSelected;
    this.submitted = true;

    if(this.getLengthAddOn() <= 0) return;
    
    this.contentService.updateSignal(this.NAME_OF_COMPONENT, addOns);
    this.footerService.next();
  }

  getLengthAddOn(): number{
    return this.addOnService.addOnsSelected.length;
  }
}
