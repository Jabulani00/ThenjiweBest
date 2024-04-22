import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlipPage } from './slip.page';

describe('SlipPage', () => {
  let component: SlipPage;
  let fixture: ComponentFixture<SlipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
