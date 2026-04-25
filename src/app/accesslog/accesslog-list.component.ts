import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-accesslog-list',
  templateUrl: './accesslog-list.component.html',
  styleUrls: ['./accesslog-list.component.css']
})
export class AccesslogListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ACCESSLOG, locator, route);
  }
}
