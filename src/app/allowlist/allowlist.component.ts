import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-allowlist',
  templateUrl: './allowlist.component.html',
  styleUrls: ['./allowlist.component.css']
})
export class AllowlistComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ALLOWLIST, locator, route);
  }

}
