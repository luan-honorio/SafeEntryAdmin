import { Component } from '@angular/core';
import { GeralService } from '../geral.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  form = new FormGroup({
    nome : new FormControl('',[Validators.required]), 
    sobrenome : new FormControl(),
    email : new FormControl('', [Validators.required]),
    senha : new FormControl(),
    setor : new FormControl(),
    contato : new FormControl(),
    dataContrato :new FormControl(),
    cpf : new FormControl(),
    admin :new FormControl(),
    createdAt : new FormControl(),
    updatedAt : new FormControl(),
  })
  constructor(public service : GeralService){}

  


}
