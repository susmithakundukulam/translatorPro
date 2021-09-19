import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.css']
})
export class InfoEditComponent implements OnInit {
  id: any;
  constructor(private activatedRoute: ActivatedRoute) { 


  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    this.id = this.activatedRoute.snapshot.params.id;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

}
