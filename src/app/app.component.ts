import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {

  }

  array1 = [
    { id: 1, name: 'siva' }
  ];

  addNew(): void {
    this.openPopup(true, 0, null);
  }

  edit(index: number, item: any): void {
    this.openPopup(false, index, item);
  }

  delete(index: number): void {
    this.array1.splice(index, 1);
  }

  openPopup(isNew: boolean, index: number, data: any): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {isNew, index, data}
    });
    dialogRef.afterClosed().subscribe( data => {
      if ( data.isNew ) {
        this.array1.push(data.data);
      } else {
        this.array1.splice(index,1,data.data);
      }
    });
  }

}
