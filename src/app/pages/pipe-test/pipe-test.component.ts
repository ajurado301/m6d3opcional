import { Component, OnInit } from '@angular/core';
import { Temperatura } from '../../models/temperatura';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  public temperatura: Temperatura;
  public unidadPipe: string;

  constructor() { 
    this.temperatura = new Temperatura();
    this.unidadPipe = 'Celsius';
  }

  ngOnInit(): void {
  }

}
