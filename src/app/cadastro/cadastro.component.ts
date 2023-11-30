import { Component } from '@angular/core';
import { GeralService } from '../geral.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

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
    cpf : new FormControl(),
    admin :new FormControl(),
    DataContrato :new FormControl(),
 
  })
  constructor(public service : GeralService){}

  datA(){
    if(this.form.value.setor == "Administração"){
      this.form.value.admin = true
    }else{
      this.form.value.admin = false
    }
    this.service.postUsers(this.form.value).subscribe(res =>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })


  }


}
