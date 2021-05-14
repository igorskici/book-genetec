import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChangesComponent } from './view-changes.component';

describe('ViewChangesComponent', () => {
  let component: ViewChangesComponent;
  let fixture: ComponentFixture<ViewChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
