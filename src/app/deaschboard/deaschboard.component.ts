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

    this.dados = JSON.parse(sessionStorage.getItem('user') as string)

   
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

  adicinar(){
    this.router.navigate(['\adicioanar'])
  }
  bak(){
    this.router.navigate(['\login'])
  }

} 


