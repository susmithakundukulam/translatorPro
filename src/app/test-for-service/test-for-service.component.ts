import { Component, OnInit } from '@angular/core';
import { InjectableEgServiceService } from '../injectable-eg-service.service';

@Component({
  selector: 'app-test-for-service',
  templateUrl: './test-for-service.component.html',
  styleUrls: ['./test-for-service.component.css']
})
export class TestForServiceComponent implements OnInit {

  constructor(private injectService: InjectableEgServiceService) { }

  ngOnInit() {
    this.injectService.tempStatus.emit("Awesome succcess");
  }

}
