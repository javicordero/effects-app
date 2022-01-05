import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  listaUsuarios: Usuario[] = []

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.listaUsuarios()
      .subscribe((lista) => {
        this.listaUsuarios = lista
        console.log(lista)
      })
  }

}
