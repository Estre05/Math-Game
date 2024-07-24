import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamreComponent } from './gamre.component';

describe('GamreComponent', () => {
  let component: GamreComponent;
  let fixture: ComponentFixture<GamreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
