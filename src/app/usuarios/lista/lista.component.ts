import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  listaUsuarios: Usuario[] = []
  loading: boolean = false
  error: any 

  constructor(private userService: UsuarioService, private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.userService.listaUsuarios()
    //   .subscribe((lista) => {
    //     this.listaUsuarios = lista
    //     console.log(lista)
    //   })
    this.store.select('usuarios')
      .subscribe(({users, loading, error}) => {
        this.listaUsuarios = users
        this.loading = loading
        this.error = error
      })

    this.store.dispatch(cargarUsuarios())
  }

}
