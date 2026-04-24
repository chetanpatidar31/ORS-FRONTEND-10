import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowlistListComponent } from './allowlist-list.component';

describe('AllowlistListComponent', () => {
  let component: AllowlistListComponent;
  let fixture: ComponentFixture<AllowlistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowlistListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
