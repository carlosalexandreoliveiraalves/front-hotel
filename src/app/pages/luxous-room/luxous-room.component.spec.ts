import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxousRoomComponent } from './luxous-room.component';

describe('LuxousRoomComponent', () => {
  let component: LuxousRoomComponent;
  let fixture: ComponentFixture<LuxousRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxousRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxousRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
