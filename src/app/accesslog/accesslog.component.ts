import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-accesslog',
  templateUrl: './accesslog.component.html',
  styleUrls: ['./accesslog.component.css']
})
export class AccesslogComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ACCESSLOG, locator, route);
  }
}
