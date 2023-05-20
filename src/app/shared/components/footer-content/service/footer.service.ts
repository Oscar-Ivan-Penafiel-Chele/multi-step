import { Injectable } from '@angular/core';
import { RoutesService } from 'src/app/shared/services/routes/routes.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  protected readonly ACTION_NEXT = 'next';
  protected readonly ACTION_BACK = 'back';

  constructor(private _routesService: RoutesService){}

  public back(): void{
    this._routesService.handleAction(this.ACTION_BACK);
  }

  public next(): void{
    this._routesService.handleAction(this.ACTION_NEXT);
  }

  protected complete(): void{
    alert("Completado");
  }
}
