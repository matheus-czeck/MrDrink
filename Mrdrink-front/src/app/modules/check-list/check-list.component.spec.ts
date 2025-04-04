import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListComponent } from './check-list.component';

describe('CheckListComponent', () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
