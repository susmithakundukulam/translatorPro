import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translator-dta',
  templateUrl: './translator-dta.component.html',
  styleUrls: ['./translator-dta.component.css']
})
export class TranslatorDtaComponent implements OnInit {

  //emailid = "susmitha";
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}

}
