import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() brand: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  modes = [
    {'mode': 'dating', 'icon': 'favorite', 'class': 'inactive'},
    {'mode': 'friendship', 'icon': 'group_add', 'class': 'inactive'},
    {'mode': 'hookup', 'icon': 'person_pin_circle', 'class': 'inactive'},
    {'mode': 'events', 'icon': 'event_available', 'class': 'inactive'},
    {'mode': 'search', 'icon': 'search', 'class': 'inactive'}
  ];

  currnet_mode = {'mode': 'dating', 'icon': 'favorite'};

  activateMode(mode) {
    for (let el of this.modes) {
      if (el.mode === mode) {
        el.class = 'activated';
      } else {
        el.class = 'inactive';
      }
    }
  }

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        switch (e.url) {
          case '/mode/dating':
            this.activateMode('dating');
            break;
          case '/mode/friendship':
            this.activateMode('friendship');
            break;
          case  '/mode/hookup':
            this.activateMode('hookup');
            break;
          case '/mode/events':
            this.activateMode('events');
            break;
          case '/mode/search':
            this.activateMode('search');
            break;
          default:
            break;
        }
      }
    });
  }
}
