import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElipticasComponent } from './elipticas.component';

describe('ElipticasComponent', () => {
  let component: ElipticasComponent;
  let fixture: ComponentFixture<ElipticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElipticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElipticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
