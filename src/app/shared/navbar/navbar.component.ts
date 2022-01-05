import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  formulario: FormGroup

  constructor(private router: Router, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      txtInput: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit(): void {
  }


  irUsuario(): void{
    if(this.formulario.get('txtInput')?.invalid){
      return
    } 

    this.router.navigate(['usuario/', this.formulario.get('txtInput')?.value])
    this.formulario.get('txtInput')?.reset()
  }



}
