import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { PlaceServices } from './place.services';

describe('PlaceComponent', () => {
  let component: PlaceComponent;
  let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same place as the services', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    let placeServices = fixture.debugElement.injector.get(PlaceServices);
    expect(app.places).toEqual(placeServices.places);
  });


});
