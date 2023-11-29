import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeralService } from '../geral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    id : new FormControl('', [Validators.required])
  });

  user : any = [];
  
  constructor(public service : GeralService, public router : Router ){}
  ngOnInit(): void {

  }
  
  select(){
    const idValue = this.form.get('id')?.value;
    console.log(idValue);
    this.service.selectOne(idValue? idValue : '').subscribe(res =>{
     
      sessionStorage.setItem('user', JSON.stringify(res)); 
      this.user  = sessionStorage.getItem('user');
      
      const log = this.user; 

      
          this.router.navigate(['/deach' , {log  : JSON.stringify(this.user)}])
      
    })
  
  }

}
