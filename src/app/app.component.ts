import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  welcome: any;
  updateButton: any;
  saveButton: any;
  title = 'marksApp';
  tamil = '';
  english = '';
  maths = '';
  science = '';
  social = '';
  mark = '';
  total: any;
  interval: any;
  personName = '';
  studentDetail: Array<any> = [];
  outputTable: Array<any> = [];
  list: any = [];
  data: object;
  id: any;
  letters = /^[A-Z a-z]+$/;

  constructor(private api: ApiService) {
    const x = {
      sub: '',
    };
    this.studentDetail.push(x);
    this.displayDetails();
    setInterval(() => {
      this.disableButton();
    }, 1000);
    setInterval(() => {
      this.totalMark();
    }, 1000);
  }

  // inserting into database
  insertDetails() {
    if (this.personName.match(this.letters)) {
      this.totalMark();
      console.log('student mark is ' + this.total);
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
      this.disableButton();
      this.interval = setInterval(() => {
        this.displayDetails();
      }, 1000);
    } else {
      alert("Name should be alphabets. Numbers not allowed.")
    }

  }

  // viewing the value from database
  async displayDetails() {
    const res: any = await this.api.get('http://localhost:80/MarksApp/outputTable.php');
    this.list = res.data;
    this.totalMark();
    this.disableButton();
  }

  // refilling the value in the input boxes
  editDetails(x: any) {
    if (confirm('Do you want to Edit this?') === true) {
      this.updateButton = true;
      this.saveButton = false;
      this.id = x.id;
      this.personName = x.name,
        this.tamil = x.tamil,
        this.english = x.english,
        this.maths = x.maths,
        this.science = x.science,
        this.social = x.social;
      this.total = x.total;
      this.interval = setInterval(() => {
        this.displayDetails();
      }, 1000);
    }
  }

  // updating the values into the database
  updateDetails() {
    if (this.personName.match(this.letters)) {
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
      this.displayDetails();
    }
    else {
      alert("Name should be in Alphabets. Numbers not allowed.")
    }
  }

  // deleting the values in the database
  deleteDetails(x) {
    if (confirm('Do you want to delete the item?') === true) {
      this.api.post('http://localhost:80/MarksApp/delete.php', x).then((x) => {
        console.log('Item deleted', x);
      }).catch((x) => {
        console.error('Error is', x);
      });
      this.displayDetails();
      this.reloadInputs();
    }
  }

  // making the input fields empty
  reloadInputs() {
    this.updateButton = false;
    this.personName = '';
    this.tamil = '';
    this.english = '';
    this.maths = '';
    this.science = '';
    this.social = '';
    this.mark = '';
  }

  // disable the save button
  disableButton() {
    if (this.tamil === '') {
      this.saveButton = false;
    }
    else if (this.english === '') {
      this.saveButton = false;
    }
    else if (this.maths === '') {
      this.saveButton = false;
    }
    else if (this.science === '') {
      this.saveButton = false;
    }
    else if (this.science === '') {
      this.saveButton = false;
    }
    else if (this.social === '') {
      this.saveButton = false;
    }
    else if (this.personName === '') {
      this.saveButton = false;
    }
    else {
      this.saveButton = true;
    }
  }

  // calculating the total marks
  totalMark() {
    this.total = Number(this.tamil) + Number(this.english) + Number(this.maths) + Number(this.science) + Number(this.social);
  }
  sortRollno() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return a.id - b.id;
    });
  }

  sortTamil() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return b.tamil - a.tamil;
    });
  }
  sortEnglish() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return b.english - a.english;

    });
  }
  sortMaths() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return b.maths - a.maths;
    });
  }
  sortScience() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return b.science - a.science;
    });
  }
  sortSocial() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return b.social - a.social;
    });
  }
  sortTotal() {
    clearInterval(this.interval);
    this.list.sort((a, b) => {
      return b.total - a.total;
    });
  }

}
