import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  updateButton: any;
  saveButton: any;
  title = 'marksApp';
  subjectName = '';
  mark = '';
  personName = '';
  studentDetail: Array<any> = [];
  outputTable: Array<any> = [];
  list: any = [];
  data: object;
  id: any;
  constructor(private api: ApiService) {
    const x = {
      sub: '',
    };
    this.studentDetail.push(x);

    setInterval(()=> {this.display();},1000);

  }

  apiInsert() {
    this.api.post('http://localhost:80/MarksApp/insert.php', {
      name: this.personName,
      sub: JSON.stringify(this.studentDetail)
    }).then((x) => {
      console.log('Item Saved', x);
    }).catch((x) => {
      console.error('Error is', x);
    });
    this.display();
    let obj = this.list.filter((a:any)=>a.type === 'mark');
     console.log(obj);
     this.mark = obj.reduce((a:number,b:any)=>{
        return a + parseInt(b.mark);
      },0);
  }

  async display() {
    const res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');

    let list = [];
    res.data.forEach(element => {
      element.markList = JSON.parse(element.subjectAndMark);
      console.log(element);
      list.push(element);
      this.list = list;
    });
    this.saveButton = true;
  }

  edit(x: any) {
    this.updateButton = true;
    this.saveButton = false;
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
    this.updateButton = false;
    this.saveButton = true;
  }

  delete(x) {
    if (confirm('delete the item?') === true) {
      this.api.post('http://localhost:80/MarksApp/delete.php', x).then((x) => {
        console.log('Item deleted', x);
      }).catch((x) => {
        console.error('Error is', x);
      });
      this.display();
      this.personName = ''
      this.subjectName = ''
    }
  }
newRow() {
    const x = {
      subjectName: this.subjectName,
    };
    this.studentDetail.push(x);
  }
  // save() {
  //   const x = {
  //     studentName: this.personName,
  //     opSub: this.studentDetail
  //   };
  //   this.outputTable.push(x);
  //   console.table(this.outputTable);
  // }
  
  // delete(i: any) {
  //   this.studentDetail.splice(i, 1);
  // }
}

