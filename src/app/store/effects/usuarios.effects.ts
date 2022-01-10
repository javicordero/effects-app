import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions";

@Injectable()

export class UsuariosEffects{

    constructor (
        private actions$: Actions,
        private usuariosService: UsuarioService
    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            mergeMap(
                () => this.usuariosService.listaUsuarios()
                    .pipe(
                        map(usuarios => usuariosActions.cargarUsuariosSuccess({usuarios})),
                        catchError(err => of(usuariosActions.cargarUsuariosError({payload : err})))
                    )
            )
        )
    )
}