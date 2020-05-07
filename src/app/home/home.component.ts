import { Component, OnInit } from '@angular/core';
import { log } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  periodicShow: boolean=true;
  EDS:string[]=[];
  test:number=0;
  constructor() { }

  ngOnInit(){

  }
  
  periodicClick(){
    this.periodicShow=!this.periodicShow;
  }
  testFuntion(any){
    console.log(any)
  }


  ElementPeriodic(tr:any) {
  this.EDS=tr;
  }
  closeTable(){

    this.periodicClick()
  }

}
