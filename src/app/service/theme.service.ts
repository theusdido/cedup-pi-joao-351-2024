import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public on_set_theme_contrast:Subject<string> = new Subject<string>();
  constructor() { }

  applyTheme(theme: string): void {
    let theme_contrast_selected = 'contraste-' + theme;
    switch (theme_contrast_selected) {
      case 'contraste-dark':
        this.setContrasteDark();
      break;
      case 'contraste-light':
        this.setContrasteLight();
      break;
      default:
        this.setThemeDefault();
    }
    this.on_set_theme_contrast.next(theme_contrast_selected);
  }

  setContrasteDark() {
    const el:any = document.querySelector('.md,.ios');
    el.style.setProperty('--ion-background-color', '#000');
    el.style.setProperty('--ion-text-color', '#FFF');
    localStorage.setItem('theme-constrast', 'dark');
  }

  setThemeDefault(){
    const principal_color = '#FFF';
    const el:any          = document.querySelector('.md,.ios');


    el.style.setProperty('--ion-background-color', '#050A30');
    el.style.setProperty('--ion-text-color', principal_color);

    
    // Icon
    el.style.setProperty('--icon-color', principal_color);
    el.style.setProperty('--ion-color-step-600', principal_color);
    el.style.setProperty('--ion-text-color-step-400', principal_color);

    // Placeholder
    el.style.setProperty('--ion-text-color-step-150', principal_color);
    el.style.setProperty('--ion-color-step-850', principal_color);

    localStorage.setItem('theme-constrast', '');
  }

  getContrasteThemeLS():string{
    const contrast_theme = localStorage.getItem('theme-constrast');
    if (contrast_theme == null || contrast_theme == undefined) {
      return '';
    }else{
      return contrast_theme;
    }
  }

  setContrasteLight() {
    const principal_color = '#000';
    const el:any          = document.querySelector('.md,.ios');

    el.style.setProperty('--ion-background-color', '#FFF');
    el.style.setProperty('--ion-text-color', principal_color);

    // Icon
    el.style.setProperty('--icon-color', principal_color);
    el.style.setProperty('--ion-color-step-600', principal_color);
    el.style.setProperty('--ion-text-color-step-400', principal_color);

    // Placeholder
    el.style.setProperty('--ion-text-color-step-150', principal_color);
    el.style.setProperty('--ion-color-step-850', principal_color);

    localStorage.setItem('theme-constrast', 'light');
  }

  applyCurrentTheme(){
    let contrast_theme      = this.getContrasteThemeLS();
    this.applyTheme(contrast_theme);    
  }
}
