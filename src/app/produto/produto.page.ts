import { Component, OnInit } from '@angular/core';
import { SpeechsynthesisService } from '../service/speechsynthesis.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {


  constructor(
    public speech_service: SpeechsynthesisService
  ) { }

  ngOnInit() {
    this.speech_service.falar('Esta é a página de veículo.');
    this.speech_service.falar('KENGURU, carros para cadeirantes.');
    this.speech_service.falar('Valor: 60 mil reais.');
    this.speech_service.falar('O Kenguru tem apenas uma porta, localizada em todo o painel traseiro, e destina-se a um único passageiro. Ao pressionar apenas um único botão, a porta abre-se e surge uma rampa para fácil acesso. Em vez de volante e pedais, este modelo utiliza botões de aceleração, travagem, e comandos direcionais.');
    this.speech_service.falar('Clique no botão abaixo para entrar em contato com o vendedor.');
  }

  falar(texto: string) {
    this.speech_service.falar(texto);
  }

}
