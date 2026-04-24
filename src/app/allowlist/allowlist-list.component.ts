import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-allowlist-list',
  templateUrl: './allowlist-list.component.html',
  styleUrls: ['./allowlist-list.component.css']
})
export class AllowlistListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ALLOWLIST, locator, route);
  }
}
