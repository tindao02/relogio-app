import { Relogio } from './../relogio.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RelogiosService } from '../relogios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-relogios-create',
  templateUrl: './relogios-create.component.html',
  styleUrls: ['./relogios-create.component.css']
})
export class RelogiosCreateComponent implements OnInit 
{
  public relogiosForm: FormGroup;
  relogios: Relogio[];

  constructor(
    public dialogRef: MatDialogRef<RelogiosCreateComponent>,
    private relogiosService: RelogiosService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void 
  {
    this.relogiosForm = this.fb.group({
      marca: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  cancelar(): void {
    this.closeDialog();
    this.openSnack("Operação cancelada!");
  }

  salvar(): void
  {
    this.relogiosService
        .salvarRelogio(this.relogiosForm.value)
        .subscribe(result => {
          window.location.reload();
          this.openSnack(result.marca + " salvo com sucesso!");},
        errorResponse => { this.openSnack(errorResponse.error.mensagemUsuario)});
    
    this.closeDialog();
  }

  closeDialog(): void
  {
    this.dialogRef.close();
    this.relogiosForm.reset();
  }

  openSnack(msg: string): void
  {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
