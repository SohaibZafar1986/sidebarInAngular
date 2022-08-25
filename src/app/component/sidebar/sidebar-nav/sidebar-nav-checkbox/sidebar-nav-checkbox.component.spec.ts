import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavCheckboxComponent } from './sidebar-nav-checkbox.component';

describe('SidebarNavCheckboxComponent', () => {
  let component: SidebarNavCheckboxComponent;
  let fixture: ComponentFixture<SidebarNavCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
