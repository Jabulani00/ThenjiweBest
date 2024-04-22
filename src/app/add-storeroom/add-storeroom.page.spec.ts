import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStoreroomPage } from './add-storeroom.page';

describe('AddStoreroomPage', () => {
  let component: AddStoreroomPage;
  let fixture: ComponentFixture<AddStoreroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoreroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
