import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetforumsComponent } from './getforums.component';

describe('GetforumsComponent', () => {
  let component: GetforumsComponent;
  let fixture: ComponentFixture<GetforumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetforumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetforumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
