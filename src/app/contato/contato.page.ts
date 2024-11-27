import { Component, OnInit } from '@angular/core';
import { SpeechsynthesisService } from '../service/speechsynthesis.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor(
    public speech_service: SpeechsynthesisService
  ) { }

  ngOnInit() {
    this.speech_service.falar('Esta é a página de pesquisa de contato.');
  }

  falar(texto:string){
    this.speech_service.falar(texto);
  }

}
