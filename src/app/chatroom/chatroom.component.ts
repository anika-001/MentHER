import { Component, OnInit,Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
  animations: [
    trigger('chatroom', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ChatroomComponent implements OnInit {
  @Input() text = '';
  days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  numberofdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  currentweek: Array<String> = [];
  currentschedule: any = {};
  month: number = 0;
  curryear: number = 0;
  offset: number = 0;
  currentday: number = 0;
  currentyear: number = 0;
  currentmonth: number = 0;
  offsetcurrentmonth: number = 0;
  // referencedate:Date= 
  constructor() { }
  
  iscurrent(i: number, j: number) {
    var tempvar1 = new Date(Date.now())
    if (this.month != tempvar1.getMonth()) {
      return false;
    }
    else if(this.currentday == this.daysofweek(i, j)  && this.month ==tempvar1.getMonth()) 
    
    { console.log("current",this.currentday , this.daysofweek(i, j) , this.month,tempvar1.getMonth() )
      return true; }

    else { return false; }
  }


  //Function to print days in the month
  daysofweek(i: number, j: number) {
    this.setoffset(this.month);
    let temp = (i * 7) + j + 1 - this.offsetcurrentmonth;
    if (temp > this.numberofdays[this.month] || temp < 1) { return ''; }
    return (i * 7) + j + 1 - this.offsetcurrentmonth;
    
  }

  checkmonth(m: string) {
    for (let index = 0; index < this.months.length; index++) {
      if (m == this.months[index]) {
        return index;
      }

    }
    return 0;
  }
   
  move(m:string){
    if (m=='b') {
      if (this.month>0) {
        this.month= this.month-1; 
      }
     
    }

    if (m== 'f') {
      if (this.month<11) {
        this.month= this.month+1; 
      }

    }
  }

  setoffset(currmonth: number) 
  {
    console.log(new Date(2022, currmonth, 1).getDay(), "dayy");
    if (new Date(2022, currmonth, 1).getDay() ) {
      this.offsetcurrentmonth=new Date(2022, currmonth, 1).getDay() -1;
      console.log(this.offsetcurrentmonth, "da");
    }
    else {
      this.offsetcurrentmonth=new Date(2022, currmonth, 1).getDay() ;
      console.log(this.offsetcurrentmonth, "day");
    }
    
     

  }
   

  toIst(date: Date) {
    return new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
  }
  tempvar = new Date(Date.now());
  ngOnInit(): void {
    this.tempvar = new Date(Date.now());
    let unix_timestamp = Date.now();
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    this.currentday= this.tempvar.getDate();
    this.currentyear= this.tempvar.getFullYear();
    console.log(formattedTime, unix_timestamp, date);
    // console.log(date+'--'+  hours+'+'+  minutes+'-'+ seconds ); 
    console.log(this.tempvar.getMonth());
    this.offsetcurrentmonth = (new Date(2022, 1, 1).getDay())
    //  this.month=this.checkmonth(this.tempvar.split(' ')[0]);
    this.month = this.tempvar.getMonth();
    console.log(this.month,'month', this.months[this.month]);
    this.setoffset(this.month);
    
        //  console.log(this.offsetcurrentmonth, 'this is date')
     
        // for (let index = 0; index < 5; index++) {
        //  for (let j = 0; j<7; j++){
        //     console.log(this.iscurrent(index, j), index,j ,'hello');
        //  }
          
        // }
  }

}