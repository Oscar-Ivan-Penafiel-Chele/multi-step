import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private footerService: FooterService){
    this.MENU_LENGTH = footerService.getMenuLength();
  }

  protected back(): void{
    this.footerService.back();
  }

  protected next(): void{
    // if(!false) return;
    
    this.footerService.next();
  }

  protected getIndexRoute(): number{
    return this.footerService.getIndexRoute();
  }

  protected complete(): void{}
}
