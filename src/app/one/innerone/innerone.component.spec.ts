import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InneroneComponent } from './innerone.component';

describe('InneroneComponent', () => {
  let component: InneroneComponent;
  let fixture: ComponentFixture<InneroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InneroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InneroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
