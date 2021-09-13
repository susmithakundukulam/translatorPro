import { Component, OnInit } from '@angular/core';
import { InjectableEgServiceService } from '../injectable-eg-service.service';

@Component({
  selector: 'app-test-for-service1',
  templateUrl: './test-for-service1.component.html',
  styleUrls: ['./test-for-service1.component.css']
})
export class TestForService1Component implements OnInit {

  constructor(private injectable : InjectableEgServiceService) { 
    this.injectable.tempStatus.subscribe(
      (status: string) => alert("status : " + status)
    )
  }

  ngOnInit() {
  }

}
