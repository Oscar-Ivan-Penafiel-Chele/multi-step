import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-menu-card',
  templateUrl: './item-menu-card.component.html',
  styleUrls: ['./item-menu-card.component.scss']
})
export class ItemMenuCardComponent {
  @Input() id   : string = '';
  @Input() name : string = '';
  @Input() title: string = '';
  @Input() label: string = '';
}
