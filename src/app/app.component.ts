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
  tamil = 0;
  english = 0;
  maths = 0;
  science = 0;
  social = 0;
  mark = 0;
  total = 0;
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
    setInterval(() => { this.displayDetails(); }, 1000);

  }
  totalMark() {
    this.total = Number(this.tamil) + Number(this.english) + Number(this.maths) + Number(this.science) + Number(this.social);
  }

  // inserting into database
  insertDetails() {
    this.totalMark();
    console.log("student mark is " + this.total)
    this.api.post('http://localhost:80/MarksApp/insert.php', {
      name: this.personName,
      tamil: this.tamil,
      english: this.english,
      maths: this.maths,
      science: this.science,
      social: this.social,
      total: this.total,

    }).then((x) => {
      console.log('Item Saved', x);
    }).catch((x) => {
      console.error('Error is', x);
    });
    this.reloadInputs();
  }

  // viewing the value from database
  async displayDetails() {
    const res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');
    this.list = res.data;
    this.totalMark();
  }

  // refilling the value in the input boxes
  editDetails(x: any) {
    this.updateButton = true;
    this.saveButton = false;
    this.id = x.id;
    this.personName = x.name,
      this.tamil = x.tamil,
      this.english = x.english,
      this.maths = x.maths,
      this.science = x.science,
      this.social = x.social
    this.total = parseInt(x.total);
  }

  // updating the values into the database
  updateDetails() {
    this.api.post('http://localhost:80/MarksApp/update.php',
      {
        id: this.id,
        name: this.personName,
        tamil: this.tamil,
        english: this.english,
        maths: this.maths,
        science: this.science,
        social: this.social,
        total: this.total
      }).then((x) => {
        console.log('Item Updated', x);
      }).catch((x) => {
        console.error('Error is', x);
      });
    this.reloadInputs();
  }

  // deleting the values in the database
  deleteDetails(x) {
    if (confirm('delete the item?') === true) {
      this.api.post('http://localhost:80/MarksApp/delete.php', x).then((x) => {
        console.log('Item deleted', x);
      }).catch((x) => {
        console.error('Error is', x);
      });
      this.reloadInputs();
    }
  }

  //making the input fields empty
  reloadInputs() {
    this.updateButton = false;
    this.saveButton = true;
    this.personName = '';
    this.tamil = 0;
    this.english = 0;
    this.maths = 0;
    this.science = 0;
    this.social = 0;
    this.mark = 0;
  }
}
