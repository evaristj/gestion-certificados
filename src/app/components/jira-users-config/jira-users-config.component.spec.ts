import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraUsersConfigComponent } from './jira-users-config.component';

describe('JiraUsersConfigComponent', () => {
  let component: JiraUsersConfigComponent;
  let fixture: ComponentFixture<JiraUsersConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraUsersConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraUsersConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
