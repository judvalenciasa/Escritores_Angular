import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Escritor } from '../models/escritor.model';
import { EscritoresService } from '../servicios/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];


  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    //this.arrEscritores = this.escritoresService.getAll();
    //promesa

    //THEN CACTH
    //this.escritoresService.getAllPromesa().then(escritores => {
    //  this.arrEscritores = escritores;
    //});
    //AWAIT
    this.arrEscritores = await this.escritoresService.getAllPromesa();
  }

  async onChange($event) {
    if ($event.target.value === "todos") {
      this.arrEscritores = await this.escritoresService.getAllPromesa();
    } else {
      this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
    }
  }



}
