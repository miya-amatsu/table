import { Component,EventEmitter, OnInit, Output , Input} from '@angular/core';
import {ElementPeriodic} from '../viewmodel/element-periodic'
import { log } from 'util';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Output() selectedDone = new EventEmitter<any>();
  @Output() closeList = new EventEmitter<any>();
  @Input()  show: boolean;
 
  returnlist = [];
  elementArr:ElementPeriodic[];
  height = Array(9).fill(0).map((x,i)=>i)
  width = Array(18).fill(0).map((x,i)=>i)
  constructor() { }

  ngOnInit(): void {
    this.elementArr=[
     {"symbol":"H","number":1,"switch":false}, null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"symbol":"He","number":2,"switch":false},{"symbol":"Li","number":3,"switch":false},{"symbol":"Be","number":4,"switch":false},null,null,null,null,null,null,null,null,null,null,{"symbol":"B","number":5,"switch":false},{"symbol":"C","number":6,"switch":false},{"symbol":"N","number":7,"switch":false},{"symbol":"O","number":8,"switch":false},{"symbol":"F","number":9,"switch":false},{"symbol":"Ne","number":10,"switch":false},{"symbol":"Na","number":11,"switch":false},{"symbol":"Mg","number":12,"switch":false},null,null,null,null,null,null,null,null,null,null,{"symbol":"Al","number":13,"switch":false},{"symbol":"Si","number":14,"switch":false},{"symbol":"P","number":15,"switch":false},{"symbol":"S","number":16,"switch":false},{"symbol":"Cl","number":17,"switch":false},{"symbol":"Ar","number":18,"switch":false},{"symbol":"K","number":19,"switch":false},{"symbol":"Ca","number":20,"switch":false},{"symbol":"Sc","number":21,"switch":false},{"symbol":"Ti","number":22,"switch":false},{"symbol":"V","number":23,"switch":false},{"symbol":"Cr","number":24,"switch":false},{"symbol":"Mn","number":25,"switch":false},{"symbol":"Fe","number":26,"switch":false},{"symbol":"Co","number":27,"switch":false},{"symbol":"Ni","number":28,"switch":false},{"symbol":"Cu","number":29,"switch":false},{"symbol":"Zn","number":30,"switch":false},{"symbol":"Ga","number":31,"switch":false},{"symbol":"Ge","number":32,"switch":false},{"symbol":"As","number":33,"switch":false},{"symbol":"Se","number":34,"switch":false},{"symbol":"Br","number":35,"switch":false},{"symbol":"Kr","number":36,"switch":false},{"symbol":"Rb","number":37,"switch":false},{"symbol":"Sr","number":38,"switch":false},{"symbol":"Y","number":39,"switch":false},{"symbol":"Zr","number":40,"switch":false},{"symbol":"Nb","number":41,"switch":false},{"symbol":"Mo","number":42,"switch":false},{"symbol":"Tc","number":43,"switch":false},{"symbol":"Ru","number":44,"switch":false},{"symbol":"Rh","number":45,"switch":false},{"symbol":"Pd","number":46,"switch":false},{"symbol":"Ag","number":47,"switch":false},{"symbol":"Cd","number":48,"switch":false},{"symbol":"In","number":49,"switch":false},{"symbol":"Sn","number":50,"switch":false},{"symbol":"Sb","number":51,"switch":false},{"symbol":"Te","number":52,"switch":false},{"symbol":"I","number":53,"switch":false},{"symbol":"Xe","number":54,"switch":false},{"symbol":"Cs","number":55,"switch":false},{"symbol":"Ba","number":56,"switch":false},{"symbol":"La","number":57,"switch":false},{"symbol":"Hf","number":72,"switch":false},{"symbol":"Ta","number":73,"switch":false},{"symbol":"W","number":74,"switch":false},{"symbol":"Re","number":75,"switch":false},{"symbol":"Os","number":76,"switch":false},{"symbol":"Ir","number":77,"switch":false},{"symbol":"Pt","number":78,"switch":false},{"symbol":"Au","number":79,"switch":false},{"symbol":"Hg","number":80,"switch":false},{"symbol":"Tl","number":81,"switch":false},{"symbol":"Pb","number":82,"switch":false},{"symbol":"Bi","number":83,"switch":false},{"symbol":"Po","number":84,"switch":false},{"symbol":"At","number":85,"switch":false},{"symbol":"Rn","number":86,"switch":false},{"symbol":"Fr","number":87,"switch":false},{"symbol":"Ra","number":88,"switch":false},{"symbol":"Ac","number":89,"switch":false},{"symbol":"Rf","number":104,"switch":false},{"symbol":"Db","number":105,"switch":false},{"symbol":"Sg","number":106,"switch":false},{"symbol":"Bh","number":107,"switch":false},{"symbol":"Hs","number":108,"switch":false},{"symbol":"Mt","number":109,"switch":false},{"symbol":"Ds","number":110,"switch":false},{"symbol":"Rg","number":111,"switch":false},{"symbol":"Cn","number":112,"switch":false},{"symbol":"Nh","number":113,"switch":false},{"symbol":"Fl","number":114,"switch":false},{"symbol":"Mc","number":115,"switch":false},{"symbol":"Lv","number":116,"switch":false},{"symbol":"Ts","number":117,"switch":false},{"symbol":"Og","number":118,"switch":false},null,null,{"symbol":"Ce","number":58,"switch":false},{"symbol":"Pr","number":59,"switch":false},{"symbol":"Nd","number":60,"switch":false},{"symbol":"Pm","number":61,"switch":false},{"symbol":"Sm","number":62,"switch":false},{"symbol":"Eu","number":63,"switch":false},{"symbol":"Gd","number":64,"switch":false},{"symbol":"Tb","number":65,"switch":false},{"symbol":"Dy","number":66,"switch":false},{"symbol":"Ho","number":67,"switch":false},{"symbol":"Er","number":68,"switch":false},{"symbol":"Tm","number":69,"switch":false},{"symbol":"Yb","number":70,"switch":false},{"symbol":"Lu","number":71,"switch":false},null,null,null,null,{"symbol":"Th","number":90,"switch":false},{"symbol":"Pa","number":91,"switch":false},{"symbol":"U","number":92,"switch":false},{"symbol":"Np","number":93,"switch":false},{"symbol":"Pu","number":94,"switch":false},{"symbol":"Am","number":95,"switch":false},{"symbol":"Cm","number":96,"switch":false},{"symbol":"Bk","number":97,"switch":false},{"symbol":"Cf","number":98,"switch":false},{"symbol":"Es","number":99,"switch":false},{"symbol":"Fm","number":100,"switch":false},{"symbol":"Md","number":101,"switch":false},{"symbol":"No","number":102,"switch":false},{"symbol":"Lr","number":103,"switch":false},null,null
    ]
  }

  onSelect(el:ElementPeriodic){
    el.switch=!el.switch;
    this.returnlist = [];
    this.elementArr.map(x=>{
      if(x!=null){
        if(x.switch){
          let obj = x.symbol;
          this.returnlist.push(obj);
        }
      }
    });
    this.selectedDone.emit(this.returnlist);
  }
  elementchick(){
    this.show=false;
    //console.log(555);
    this.returnlist = [];
    this.elementArr.map(x=>{
      if(x!=null){
        if(x.switch){
          let obj = x.symbol;
          this.returnlist.push(obj);
        }
      }
    });
  //  console.log(this.returnlist);
    this.selectedDone.emit(this.returnlist);
    this.closeList.emit(this.show);
  }

  

}
