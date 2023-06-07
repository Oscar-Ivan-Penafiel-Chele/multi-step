import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from 'src/app/pages/content-card/service/content.service';
import { AddOn } from 'src/app/models';
import { SummaryService } from '../../../../../service/summary.service';

@Component({
  selector: 'addons-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addons-items.component.html',
  styleUrls: ['./addons-items.component.scss']
})
export class AddonsItemsComponent {
  protected statusPlan: boolean = false;
  
  private contentService = inject(ContentService);
  private summaryService = inject(SummaryService);
  protected addOns: AddOn[] = this.contentService.informationStep().addOns!;

  constructor(){
    this.statusPlan = this.summaryService.getStatus();
  }
}
