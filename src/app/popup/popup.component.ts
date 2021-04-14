import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  id: number = 0;
  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    if(!data.isNew) {
      this.id = data.data.id;
      this.name = data.data.name;
    }
  }

  ngOnInit(): void {
  }

  addUpdate(): void {
    this.dialogRef.close({ isNew: this.data.isNew, data: {id: this.id, name: this.name} });
  }

}
