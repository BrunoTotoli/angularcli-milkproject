import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Milk} from "../model/milk";
import {MilksService} from "../services/milks.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";


@Component({
  selector: 'app-milks',
  templateUrl: './milks.component.html',
  styleUrls: ['./milks.component.scss']
})
export class MilksComponent implements OnInit {


  milks$: Observable<Milk[]>;
  displayedColumns: string[] = ['quantity','periodTime','date','actions'];

  constructor(private milksService: MilksService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.milks$ = milksService.list().pipe(
      catchError(err => {
        this.onError('Erro ao carregar lista ')
        return of([])
      })
    )
  }

  ngOnInit() {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route})
  };




}
