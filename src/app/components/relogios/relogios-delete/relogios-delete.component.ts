import { Relogio } from './../relogio.model';
import { Component, OnInit } from '@angular/core';
import { RelogiosService } from '../relogios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relogios-delete',
  templateUrl: './relogios-delete.component.html',
  styleUrls: ['./relogios-delete.component.css']
})
export class RelogiosDeleteComponent implements OnInit 
{
  relogio: Relogio = 
  {
    marca: '',
    status: '',
    id: 0
  }

  constructor(private relogiosService: RelogiosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.relogiosService.getById(id).subscribe( relogio => {
      this.relogio = relogio;
    });
  }

  public cancelar(): void
  {
    this.router.navigate(['/relogios']);
  }

  deletar(): void
  {
    this.relogiosService.delete(this.relogio.id).subscribe( () => {
      this.router.navigate(['/relogios']);
    } );
  }

}
