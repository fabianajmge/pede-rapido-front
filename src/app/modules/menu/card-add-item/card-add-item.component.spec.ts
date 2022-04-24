import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddItemComponent } from './card-add-item.component';

describe('CardAddItemComponent', () => {
  let component: CardAddItemComponent;
  let fixture: ComponentFixture<CardAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
