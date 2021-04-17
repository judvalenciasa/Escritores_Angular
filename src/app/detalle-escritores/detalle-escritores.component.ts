import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from '../models/escritor.model';
import { EscritoresService } from '../servicios/escritores.service';

@Component({
  selector: 'app-detalle-escritores',
  templateUrl: './detalle-escritores.component.html',
  styleUrls: ['./detalle-escritores.component.css']
})
export class DetalleEscritoresComponent implements OnInit {

  escritor:Escritor;
  constructor(private activatedRoute:ActivatedRoute, private escritoresServices:EscritoresService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params=>{
      console.log(params.escritor);
      this.escritor = await this.escritoresServices.getById(parseInt(params.escritorId));
    });
  }
}
