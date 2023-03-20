import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reload-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
 name!:string;
 emailid!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
