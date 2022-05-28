import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Evento } from '../model/evento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  eventos$: Observable<Evento[]>;

  constructor(
    private eventosService: EventosService,
    public dialog: MatDialog
  ) { 
    this.eventos$ = this.eventosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar eventos.');
        return of([]);
      })
    );
  }

  

  onError(errorMsg:string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }
  ngOnInit(): void {
  }

}
