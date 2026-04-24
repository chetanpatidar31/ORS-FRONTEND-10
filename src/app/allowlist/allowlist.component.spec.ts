import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowlistComponent } from './allowlist.component';

describe('AllowlistComponent', () => {
  let component: AllowlistComponent;
  let fixture: ComponentFixture<AllowlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
