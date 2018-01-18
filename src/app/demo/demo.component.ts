import { Component,NgModule, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterViewInit {
  
  batchVal:string = ' ';
  sourceSysVal:string[] ;
  fromDateVal:string = ' ';
  toDateVal:string = ' ';


 

  dropdownList = [];

    selectedItems = [];

    dropdownSettings = {};

    ngOnInit(){

        this.dropdownList = [

                              {"id":1,"itemName":"FX"},

                              {"id":2,"itemName":"FDM"},

                              {"id":3,"itemName":"FDFR"},

                              {"id":4,"itemName":"EACI"}

                             

                            ];

        this.selectedItems = [

                                

                            ];

        this.dropdownSettings = {

                                  singleSelection: false,

                                  //text:"",

                                  selectAllText:'Select All',

                                  unSelectAllText:'UnSelect All',

                                  enableSearchFilter: true,

                                  classes:"myclass custom-class"

                               };           

    }

    onItemSelect(item:any){

        console.log(item);

        console.log(this.selectedItems);

    }

    OnItemDeSelect(item:any){

        console.log(item);

        console.log(this.selectedItems);

    }

    onSelectAll(items: any){

        console.log(items);

    }

    onDeSelectAll(items: any){

        console.log(items);

    }

 

 

  name1:string;

  isCollapsed:boolean = false;

  isCollapsedAdd:boolean = true;

  isCollapsedTele:boolean = true;

  isCollapsedSocio:boolean = true;

  isCollapsedElect:boolean = true;

  contacts= [

    {"keyid":"1001",

    "matched":"difference"

    },

    {"keyid":"1002",

    "matched":"same"

    },

    {"keyid":"1003",

    "matched":"same"

    },

    {"keyid":"1005",

    "matched":"difference"

    },

    {"keyid":"1006",

    "matched":"difference"

    },

    {"keyid":"1007",

    "matched":"same"

    },

    {"keyid":"1008",

    "matched":"difference"

    },

    {"keyid":"1009",

    "matched":"difference"

    },

    {"keyid":"1010",

    "matched":"same"

    },

    {"keyid":"1011",

    "matched":"difference"

    },

    {"keyid":"1012",

    "matched":"difference"

    },

    {"keyid":"1013",

    "matched":"same"

    }

];

  batchs = [{

     "id":"FX_23042018123044",

     "matched":"1000",

     "unmatched":"500"

  },

  {

    "id":"FX_23042018123043",

    "matched":"1500",

    "unmatched":"0"

},

{

  "id":"FX_23042018123042",

  "matched":"1400",

  "unmatched":"100"

},

{

  "id":"FX_23042018123041",

  "matched":"1300",

  "unmatched":"200"

},

{

  "id":"FX_23042018123040",

  "matched":"1200",

  "unmatched":"300"

}

 

]

 

  constructor() { }

 

 

  ngAfterViewInit(){

    $('#dater').bootstrapMaterialDatePicker({ weekStart : 0, time: false });

    $('#dater1').bootstrapMaterialDatePicker({ weekStart : 0, time: false });

 

  }
  
  reset()
  {

    this.batchVal = ' ';
    this.sourceSysVal.length=0;
    this.fromDateVal = ' ';
    this.toDateVal = ' ';



  }

selectedSearchChange()

{


this.selectedSearch=true;

console.log(this.selectedSearch);

}


fromDate(){

  $('#dater').focus()

}

toDate(){

  $('#dater1').focus()

}

key: string = 'id'; //set default

 

key1: string = 'keyid';

 

  reverse: boolean = true;

 

  reverse1: boolean = true;

 

  selectedSearch:boolean=false;

 

  sort(key){

 

    this.key = key;

 

    this.reverse = !this.reverse;

 

}

 

sortKey(key1){

 

  this.key1 = key1;

 

  this.reverse1 = !this.reverse1;

 

}

 

//initializing p to one

 

p: number = 1;

pg: number = 1;

 

}

