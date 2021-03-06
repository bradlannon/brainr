import { Component, OnInit,Optional } from '@angular/core';
import { ComputerService } from '../computer.service';

import {MdDialog,MdToolbar,MdSidenav,MdSidenavContainer,MdSidenavModule,MdSidenavToggleResult,MdToolbarBase,MdToolbarModule,MdToolbarRow, MdDialogRef, MdSnackBar, MdButton, MdCard,MdInputContainer,MdInputDirective,MdInputModule,MdDatepickerInput} from '@angular/material';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})

export class ComputersComponent implements OnInit {
  computers:any;
  listFilter: string;

constructor(private firebaseService:ComputerService,private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  ngOnInit() {
    this.firebaseService.getComputers().subscribe(computers => {
      // console.log(JSON.stringify({ data: computers}, null, 4)); 
      this.computers = computers;   
    });
  }
 loading:false;

 ///////////////////////////////////

 isDarkTheme: boolean = false;
  lastDialogResult: string;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;


openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}


@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}