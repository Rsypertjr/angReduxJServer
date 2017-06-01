//app/services/user.ts

import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {User} from '../models';

const BASE_URL2 = 'http://localhost:3000/db';
const BASE_URL = 'http://localhost:3000/users';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

// Trying to add json Server for REST API
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname + 'db.json'));
var middlewares = jsonServer.defaults();
var port = 3000;
server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log('JSON Server is running')
});


@Injectable()
export class UserService {
    user:URLSearchParams;
    constructor (private http: Http) {}

    getUsers(): Promise<User[]>{
       return this.http.get(BASE_URL,HEADER) 
         .toPromise()
         .then(response => response.json() as User[]);
    }
    getUser(id): Observable<User> {
        return this.http.get(BASE_URL + id)
        .map(res => res.json());
    }
 
    saveUser(user) {
        if(user.id === 0) {
            return this.http.post(BASE_URL, JSON.stringify(user), HEADER)
                            .map(res => res.json());
            
        } else {
            return this.http.post(BASE_URL, JSON.stringify(user), HEADER)
                            .map(res => res.json());
        }
    }

    deleteUser(user) {
        return this.http.delete(BASE_URL + '/' + user.id)
        .map(res => user);
    }
}