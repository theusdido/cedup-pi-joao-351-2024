import { Component, OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public theme_service: ThemeService
  ) {}

  ngOnInit(): void {
      this.theme_service.applyCurrentTheme();
  }
}
