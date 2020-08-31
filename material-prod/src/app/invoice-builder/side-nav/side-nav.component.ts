import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor() {}
  links = [
    {
      name: 'Add User',
      url: 'addUser',
    },
    {
      name: 'Users List',
      url: 'users',
    },
  ];
  ngOnInit(): void {}
}
