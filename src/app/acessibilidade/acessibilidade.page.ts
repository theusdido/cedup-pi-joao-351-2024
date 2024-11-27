import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { SpeechsynthesisService } from '../service/speechsynthesis.service';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.page.html',
  styleUrls: ['./acessibilidade.page.scss'],
})
export class AcessibilidadePage implements OnInit {

  public icon_tamanho_fonte: string = '../../assets/icon/tamanho-fonte.png';

  constructor(
    public theme_service: ThemeService,
    public speech_service: SpeechsynthesisService
  ) {
  }

  ngOnInit() {
    this.setListenColor();
  }

  setContraste() {
    let contrast_theme      = this.theme_service.getContrasteThemeLS();
    let set_contrast_theme  = '';
    switch (contrast_theme) {
      case '':
        set_contrast_theme = 'dark';
      break;
      case 'dark':
        set_contrast_theme = 'light';
      break;
      case 'light':
        set_contrast_theme = '';
      break;
    }
    this.theme_service.applyTheme(set_contrast_theme);
  }

  alterarTamanhoFonte(){
    
    const tamanho_fonte_ls  = this.getTamanhoFonteLS();
    let new_tamanho_fonte   = tamanho_fonte_ls + 1;
    document.querySelectorAll('.texto').forEach((el:any) => {
    
      el.classList.remove('texto-1x');
      el.classList.remove('texto-2x');
      el.classList.add('texto-'+new_tamanho_fonte+'x');  
      localStorage.setItem('font-size', new_tamanho_fonte.toString());      
    });
  }

  getTamanhoFonteLS():number{
    let tamanho_fonte_ls = localStorage.getItem('font-size');
    if (tamanho_fonte_ls == null || tamanho_fonte_ls == undefined || tamanho_fonte_ls == '' || parseInt(tamanho_fonte_ls) > 2) {
      return 0;
    }else{
      return parseInt(tamanho_fonte_ls);
    } 
  }

  setListen(){
    this.speech_service.setListen();
    this.setListenColor();
  }

  setListenColor(){
    const is_listen       = this.speech_service.getListen();
    const icon_listen:any = document.querySelector('#icon-listen');
    if (is_listen){
      icon_listen.classList.remove('fa-ear-listen');
      icon_listen.classList.add('fa-ear-deaf');
      icon_listen.style.color = '';
    }else{
      icon_listen.classList.remove('fa-ear-deaf');
      icon_listen.classList.add('fa-ear-listen');
      icon_listen.style.color = 'red';
    }    
  }
}
