import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UikitwebComponent } from './uikitweb.component';

describe('UikitwebComponent', () => {
  let component: UikitwebComponent;
  let fixture: ComponentFixture<UikitwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UikitwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UikitwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
