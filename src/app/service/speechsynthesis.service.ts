import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechsynthesisService {

  constructor() { }

  falar(texto:string){

    if (!this.getListen()) return;

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


  setListen(){
    const enabled_listen = this.getListen();
    if (enabled_listen) {
      localStorage.setItem('enabled-listen', 'false');
    }else{
      localStorage.setItem('enabled-listen', 'true');
    }
  }

  getListen(){
    const enabled_listen = localStorage.getItem('enabled-listen');
    if (enabled_listen == 'true' || enabled_listen == null || enabled_listen == undefined || enabled_listen == '') {
      return true;
    }else{
      return false;
    }
  }  
}
