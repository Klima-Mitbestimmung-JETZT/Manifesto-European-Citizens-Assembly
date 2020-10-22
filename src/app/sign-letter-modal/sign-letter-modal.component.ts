import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sign-letter-modal',
  templateUrl: './sign-letter-modal.component.html',
  styleUrls: ['./sign-letter-modal.component.css'],
})
export class SignLetterModalComponent implements OnInit {
  closeResult: string;

  form = {};

  formSubmitted:Boolean = false;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit(): void {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.formSubmitted = false;
          this.form = {};
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onSubmit() {
    this.formSubmitted = true;
    const formData = new FormData();
    for (var key in this.form) {
      if (key === 'logo') {
        console.log(this.form[key]);
        formData.append('logo', this.form[key]);
      } else {
        formData.append(key, this.form[key]);
      }
    }
    this.http.post<any>('http://127.0.0.1:3000/signee', formData).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    console.log(this.form);
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form['logo'] = file;
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
