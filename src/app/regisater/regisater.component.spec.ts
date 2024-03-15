import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisaterComponent } from './regisater.component';

describe('RegisaterComponent', () => {
  let component: RegisaterComponent;
  let fixture: ComponentFixture<RegisaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
