import { Component, OnInit } from '@angular/core';
import { SpeechsynthesisService } from '../service/speechsynthesis.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.page.html',
  styleUrls: ['./vendedor.page.scss'],
})
export class VendedorPage implements OnInit {
  constructor(
    public speech_service: SpeechsynthesisService
  ) { }

  ngOnInit() {
    this.speech_service.falar('Esta é a página do vendedor.');
    this.speech_service.falar('Vendedor: Roberto Carlos.');
    this.speech_service.falar('WhatsÁpê: (48) 9.9699-9119');
    this.speech_service.falar('Clique no botão para conversar com o vendedor.');
  }

  falar(texto: string) {
    this.speech_service.falar(texto);
  }
}
