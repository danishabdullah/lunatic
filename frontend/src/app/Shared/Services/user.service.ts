import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../Interfaces/User';


@Injectable()
export class UserService {
  user: User | null;
  isLoggedIn: Boolean;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): User {
    this.user =  {
      id: 2132312,
      name: 'Danish Abdullah',
      display_picture: 'some url',
      email: 'some email',
    };
    this.isLoggedIn = true;
    return this.user;
  }

  logout(): void {
    this.user = null;
    this.isLoggedIn = false;
  }

  register(email: string, password: string, name: string): string {
    return `$(name) has successfully registered with $(email) and $(password)`;
  }


}
