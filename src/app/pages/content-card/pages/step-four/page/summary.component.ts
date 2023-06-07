import { Component, inject} from '@angular/core';
import { ContentService } from '../../../service/content.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  protected isComplete: boolean = false;
  private contentService = inject(ContentService);

  constructor(){}

  public completeInformation(){
    this.isComplete = true;
    console.log(this.contentService.informationStep());
  }
}
