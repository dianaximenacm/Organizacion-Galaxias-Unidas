import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularesComponent } from './irregulares.component';

describe('IrregularesComponent', () => {
  let component: IrregularesComponent;
  let fixture: ComponentFixture<IrregularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrregularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
