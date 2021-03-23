import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'marksApp';
  subjectName = '';
  personName = '';
  studentDetail: Array<any> = [];
  outputTable: Array<any> = [];
  list: any = [];
  data: object
  constructor(private api: ApiService) {
    const x = {
      subName: '',
    };
    this.studentDetail.push(x);
    setInterval(() => { this.display() }, 100);
  }
  async display() {
    let res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');
    this.list = res.data;
  }
  apiInsert() {
    this.api.post('http://localhost:80/MarksApp/insert.php', {
      name: this.personName,
      sub: this.subjectName
    }).then((x) => {
      console.log('Item Saved', x);
    }).catch((x) => {
      console.error('Error is', x);
    });
    this.display();
  }
  
  deleteOutput(i: any) {
    
  this.list=  this.api.post('http://localhost:80/MarksApp/delete.php');
    let a =this.list.splice(i,1);
    this.list=  this.api.post('http://localhost:80/MarksApp/delete.php');
    console.log(a);

  }
  // save() {
  //   const x = {
  //     studentName: this.personName,
  //     opSub: this.studentDetail
  //   };
  //   this.outputTable.push(x);
  //   console.table(this.outputTable);
  //   // api call

  // }
  // newRow() {
  //   const x = {
  //     subjectName: this.subjectName,
  //   };
  //   this.studentDetail.push(x);
  //   console.log(this.studentDetail);
  // }
  // delete(i: any) {
  //   this.studentDetail.splice(i, 1);
  // }
}

