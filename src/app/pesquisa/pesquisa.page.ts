import { Component, OnInit } from '@angular/core';
import { SpeechsynthesisService } from '../service/speechsynthesis.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

  public falar_campo_pesquisa:any;
  public is_first_pesquisa: boolean = true;

  constructor(
    public speech_service: SpeechsynthesisService
  ) { }

  ngOnInit() {
    this.speech_service.falar('Esta é a página de pesquisa de automóveis.');
  }

  textoCampoPesquisar()
  {
    let texto = '';
    if (this.is_first_pesquisa){
      texto = 'Digite as caracteristicas do veiculo que você está procurando.';
      this.is_first_pesquisa = false;
    }else{
      texto = 'Pesquisar.';
    }
    this.speech_service.falar(texto);
  }
  textoPesquisa(e:any){
    clearInterval(this.falar_campo_pesquisa);
    this.falar_campo_pesquisa = setTimeout(() => {
      this.speech_service.falar(e.target.value);  
    },500);

  }

}
