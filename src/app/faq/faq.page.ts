import { Component, OnInit } from '@angular/core';
import { SpeechsynthesisService } from '../service/speechsynthesis.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage implements OnInit {

  constructor(
    public speech_service: SpeechsynthesisService
  ) { }

  ngOnInit() {
    this.speech_service.falar('Esta é a página de perguntas freqüentes.');
  }

  falar(texto: string) {
    this.speech_service.falar(texto);
  }
}
