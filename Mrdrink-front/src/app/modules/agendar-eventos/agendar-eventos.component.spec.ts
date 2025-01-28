import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarEventosComponent } from './agendar-eventos.component';

describe('AgendarEventosComponent', () => {
  let component: AgendarEventosComponent;
  let fixture: ComponentFixture<AgendarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendarEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
