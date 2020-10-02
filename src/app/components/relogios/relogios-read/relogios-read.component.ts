import { Relogio } from './../relogio.model';
import { Component, OnInit} from '@angular/core';
import { RelogiosService } from '../relogios.service';

@Component({
  selector: 'app-relogios-read',
  templateUrl: './relogios-read.component.html',
  styleUrls: ['./relogios-read.component.css']
})
export class RelogiosReadComponent implements OnInit 
{
  relogios: Relogio[];
  displayedColumns = ['id', 'marca', 'status', 'dataCadastro', 'tempoCadastrado', 'action'];

  constructor(private relogioService: RelogiosService) { }

  ngOnInit(): void 
  {
    this.relogioService
        .getRelogios()
        .subscribe( relogios => {
          this.relogios = relogios;
        } );
  }

}
