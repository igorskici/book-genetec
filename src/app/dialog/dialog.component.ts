import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public recordData: any;
  public record: FormGroup = new FormGroup({
    authors: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
    title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
    description: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(64)]),
    publishDate: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public booksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data.action === 'edit') {
      this.recordData = this.booksService.getBookEntity(Math.round(this.data.recordId))[0];
      this.record.setValue({
        authors: this.recordData.authors,
        title: this.recordData.title,
        description: this.recordData.description,
        publishDate: new Date(this.recordData.publishDate).toISOString().substring(0, 10)
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(e: any): void {
    e.preventDefault();

    const dirtyValues = [];

    if (e.submitter === undefined) {
      this.dialogRef.close();
      return;
    }

    if (this.record.invalid) {

      return;
    }

    if (!this.record.untouched) {
      Object.keys(this.record.controls).forEach(x => {
        if (this.record.controls[x].dirty) {
          dirtyValues.push({ recordId: this.data.recordId, field: x, newVal: this.record.controls[x].value });
        }
      });
    }
  }

}
