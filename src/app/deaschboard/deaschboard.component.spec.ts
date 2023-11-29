import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeaschboardComponent } from './deaschboard.component';

describe('DeaschboardComponent', () => {
  let component: DeaschboardComponent;
  let fixture: ComponentFixture<DeaschboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeaschboardComponent]
    });
    fixture = TestBed.createComponent(DeaschboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
