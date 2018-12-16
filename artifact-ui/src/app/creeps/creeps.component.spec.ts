import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreepsComponent } from './creeps.component';

describe('CreepsComponent', () => {
  let component: CreepsComponent;
  let fixture: ComponentFixture<CreepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
