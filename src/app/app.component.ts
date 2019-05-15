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

  // metodo do ciclo de vida que sera executado assim que a aplicacao subir
  ngOnInit() {
    this.init()
  }


  /**
   * chama o loadHeroes e coloca o conteudo na variavel "heroes" que sera exibida no front (pagina de teste)
   */
  init() {
    this._service.loadHeroes()
      .subscribe(res => {
        this.heroes = res.data['results'];
        console.log(`Resultado retornado pela api (para debug no console do browser): \n${JSON.stringify(this.heroes, null, 2)}`)
      })
  }

}
