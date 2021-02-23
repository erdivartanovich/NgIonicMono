import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibcoreComponent } from './libcore.component';

describe('LibcoreComponent', () => {
  let component: LibcoreComponent;
  let fixture: ComponentFixture<LibcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibcoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
