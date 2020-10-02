import { Relogio } from './../relogio.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelogiosService } from '../relogios.service';

@Component({
  selector: 'app-relogios-update',
  templateUrl: './relogios-update.component.html',
  styleUrls: ['./relogios-update.component.css']
})
export class RelogiosUpdateComponent implements OnInit 
{ 
  relogio: Relogio = 
  {
    marca: '',
    status: ''
  }

  constructor(private relogiosService: RelogiosService,
              private router: Router,
              private route: ActivatedRoute) { }

  public ngOnInit(): void 
  {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.relogiosService.getById(id).subscribe( relogio => {
      this.relogio = relogio;
      this.relogio.dataCadastro = null;
    });
  }
  
  public atualizar(): void
  {
    this.relogiosService.atualizar(this.relogio).subscribe( () => {
      this.router.navigate(["/relogios"]);
    });
  }
  
  public cancelar(): void
  {
    this.router.navigate(['/relogios']);
  }
}
