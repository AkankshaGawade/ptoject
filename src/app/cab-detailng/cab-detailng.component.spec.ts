import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabDetailngComponent } from './cab-detailng.component';

describe('CabDetailngComponent', () => {
  let component: CabDetailngComponent;
  let fixture: ComponentFixture<CabDetailngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabDetailngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabDetailngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
