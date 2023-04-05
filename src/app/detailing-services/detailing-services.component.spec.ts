import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailingServicesComponent } from './detailing-services.component';

describe('DetailingServicesComponent', () => {
  let component: DetailingServicesComponent;
  let fixture: ComponentFixture<DetailingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
