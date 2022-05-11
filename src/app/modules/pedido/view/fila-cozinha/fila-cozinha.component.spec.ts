import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaCozinhaComponent } from './fila-cozinha.component';

describe('FilaCozinhaComponent', () => {
  let component: FilaCozinhaComponent;
  let fixture: ComponentFixture<FilaCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaCozinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
