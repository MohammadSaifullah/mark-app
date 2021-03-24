import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updata: any;
  sava: any;
  title = 'marksApp';
  subjectName = '';
  personName = '';
  studentDetail: Array<any> = [];
  outputTable: Array<any> = [];
  list: any = [];
  data: object;
  id: any;
  constructor(private api: ApiService) {
    const x = {
      subName: '',
    };
    this.studentDetail.push(x);
    setInterval(() => { this.display() }, 100);
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
  async display() {
    let res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');
    this.list = res.data;
    this.sava = true;

  }
  edit(x: any) {
    this.updata = true;
    this.sava = false;
    this.id = x.id
    this.personName = x.Name,
      this.subjectName = x.subjectAndMark
    this.display();
  }
  update() {
    this.api.post("http://localhost:80/MarksApp/update.php",
      {
        id: this.id,
        name: this.personName,
        sub: this.subjectName,
      }).then((x) => {
        console.log('Item Saved', x);
        this.display();

      }).catch((x) => {
        console.error('Error is', x);
      });
    this.display();
    this.updata = false;
    this.sava = true;
  }
  async deleteOutput(i: any) {
    let res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');
    console.log(res.data);

    this.list = await this.api.post('http://localhost:80/MarksApp/delete.php').then(this.list.splice(i, 1));
    console.log(this.list);

    this.display();

    // this.list = this.api.get('http://localhost:80/MarksApp/outputTable.php');
    // // let a = this.list.splice(i, 1);
    // alert("recordd");
    // console.log(this.list.data);
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

