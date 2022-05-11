import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardMenuComponent } from './list-card-menu.component';

describe('ListCardMenuComponent', () => {
  let component: ListCardMenuComponent;
  let fixture: ComponentFixture<ListCardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
