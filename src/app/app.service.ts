import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IHero } from './IHero';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  loadHeroes(): Observable<IHero>{
    return this.http.get<IHero>('https://gateway.marvel.com:443/v1/public/events/269/characters?ts=1&apikey=30725f88857cb0a80685b8ecb39e408e&hash=ab55f23f2bed95b96528a0eeef8705db')
  }
}
