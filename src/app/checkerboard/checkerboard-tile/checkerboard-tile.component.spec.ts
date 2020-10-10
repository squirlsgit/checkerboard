import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerboardTileComponent } from './checkerboard-tile.component';

describe('CheckerboardTileComponent', () => {
  let component: CheckerboardTileComponent;
  let fixture: ComponentFixture<CheckerboardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckerboardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
