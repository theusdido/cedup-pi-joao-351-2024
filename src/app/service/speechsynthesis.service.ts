import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechsynthesisService {

  constructor() { }

  falar(texto:string){
    // Verifica se a API de síntese de fala está disponível no navegador
    if ('speechSynthesis' in window){
      this.converterTextoEmAudio(texto);
    }else{
      console.log("A API de síntese de fala não é suportada neste navegador.");
    }
  }

  converterTextoEmAudio(texto:string) {
    // Cria uma nova instância de SpeechSynthesisUtterance
    let utterance = new SpeechSynthesisUtterance(texto);

    // Configura a voz, a taxa de fala, e o tom, se desejado
    utterance.rate = 1; // 1 é o valor padrão (ajuste entre 0.1 e 10)
    utterance.pitch = 1; // 1 é o valor padrão (ajuste entre 0 e 2)
    utterance.volume = 1; // Ajuste entre 0 e 1

    // Inicia a síntese de fala
    window.speechSynthesis.speak(utterance);
  }  
}
