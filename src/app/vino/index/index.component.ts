import { Component, OnInit } from '@angular/core';
import { VinoService } from '../vino.service';
import { Vino } from '../vino';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  vinos: Vino[] = [];

  constructor(public vinoService: VinoService) { }

  ngOnInit(): void {
    this.vinoService.getAll().subscribe((data: Vino[]) => {
      this.vinos = data;
      console.log(this.vinos);

    })
  }

}
