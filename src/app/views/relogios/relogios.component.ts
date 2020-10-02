import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RelogiosCreateComponent } from 'src/app/components/relogios/relogios-create/relogios-create.component';

@Component({
  selector: 'app-relogios',
  templateUrl: './relogios.component.html',
  styleUrls: ['./relogios.component.css']
})
export class RelogiosComponent implements OnInit {

  constructor
  (
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addRelogio(): void {
    const dialogRef = this.dialog.open(RelogiosCreateComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
