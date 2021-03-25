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
    setInterval(() => { this.display(); }, 100);
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
    const res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');
    this.list = res.data;
    this.sava = true;

  }
  edit(x: any) {
    this.updata = true;
    this.sava = false;
    this.id = x.id;
    this.personName = x.Name,
    this.subjectName = x.subjectAndMark;
    this.display();
  }
  update() {
    this.api.post('http://localhost:80/MarksApp/update.php',
      {
        id: this.id,
        name: this.personName,
        sub: this.subjectName,
      }).then((x) => {
        console.log('Item Updated', x);
        this.display();

      }).catch((x) => {
        console.error('Error is', x);
      });
    this.display();
    this.updata = false;
    this.sava = true;
  }

  delete(x) {
    if (confirm("delete the item?") === true) {
      this.api.post('http://localhost:80/MarksApp/delete.php', x).then((x) => {
        console.log('Item deleted', x);
      }).catch((x) => {
        console.error('Error is', x);
      });
      this.display();
    }
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

