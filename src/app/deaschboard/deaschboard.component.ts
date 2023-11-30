import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { GeralService } from '../geral.service';

@Component({
  selector: 'app-deaschboard',
  templateUrl: './deaschboard.component.html',
  styleUrls: ['./deaschboard.component.css']
})
export class DeaschboardComponent implements OnInit {
 
  usuario  : any;
  dados : any;
  menbers : any[] = []
  constructor (public reactive : ActivatedRoute , public service : GeralService, public router : Router){}
 
 
  ngOnInit(): void {

    this.usuario = JSON.parse(this.reactive.snapshot.paramMap.get('log') as string)
    this.dados = JSON.parse(this.usuario)
    this.GetallUsers();
  }


  GetallUsers(){
    this.service.getall().subscribe(res =>{
      this.menbers = res
    
    })
  }



  edit(menbro : any){
   
    this.router.navigate(['/edit', {  menbro : JSON.stringify(menbro)}])
  }



  delet(id : number){
    this.service.delete(id).subscribe(()=>{
    this.GetallUsers();

    },
    (err)=>{
         console.log(err);
    });
  }


  adicionar(){
    this.router.navigate(['\adicioanar'])
    }
}
