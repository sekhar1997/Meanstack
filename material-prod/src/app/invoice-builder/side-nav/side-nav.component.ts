import { Link } from './../models/Link';
import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('drawer') drawer: any;

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  links: Link[] = [
    {
      name: 'Dashboard',
      url: 'dashboard',
      icon: 'speed',
      children: [
        {
          name: 'Speakers',
          icon: 'group',
          url: 'devfestfl/speakers',
        },
        {
          name: 'Sessions',
          icon: 'speaker_notes',
          url: 'devfestfl/sessions',
        },
        {
          name: 'Feedback',
          icon: 'feedback',
          url: 'devfestfl/feedback',
        },
      ],
    },
    {
      name: 'Add User',
      url: 'addUser',
      icon: 'person_add_alt_1',
    },
    {
      name: 'Users List',
      url: 'users',
      icon: 'people',
    },
    {
      name: 'UI Elements',
      url: 'uielements',
      icon: 'desktop_windows',
    },
    {
      name: 'Charts',
      url: 'charts',
      icon: 'insert_chart',
    },
    {
      name: 'tabs & pannel',
      url: 'tabs',
      icon: 'dashboard_customize',
    },
    {
      name: 'Responsive tables',
      url: 'tables',
      icon: 'table_chart',
    },
    {
      name: 'forms',
      url: 'forms',
      icon: 'upload_file',
    },
    {
      name: 'Multi-level Dropdown',
      url: 'multilevel',
      icon: 'dvr',
    },
    {
      name: 'Empty Page',
      url: 'empty',
      icon: 'insert_drive_file  ',
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }
  ngOnInit(): void {}
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}
