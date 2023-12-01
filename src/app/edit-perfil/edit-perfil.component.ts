import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeralService } from '../geral.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  
  Getuser : any 

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
    updatedAt : new FormControl(),
 
  })
constructor(public reactive : ActivatedRoute, public service : GeralService, public router : Router){}
  ngOnInit(): void {
    this.Getuser = JSON.parse(this.reactive.snapshot.paramMap.get('menbro') as string);
    

  }

    updateUser(id : number){
      this.form.value.updatedAt = new Date();
      if(this.form.value.setor == "Administração"){
        this.form.value.admin = true
      }else{
        this.form.value.admin = false
      }
          this.service.updateUsers(id , this.form.value).subscribe(res =>{
            
            this.router.navigate(['\deach']);
            
          },(Error)=>{
            alert("Erro ao Atualizar")
          })

    }



}
