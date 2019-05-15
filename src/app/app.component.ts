import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avengers - Infinity War';
  heroes: Object;
  constructor(private _service: AppService) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this._service.loadHeroes()
      .subscribe(res => {
        this.heroes = res.data['results']
        console.log(`API Results: \n${JSON.stringify(this.heroes, null, 2)}`)
      })
  }

}
