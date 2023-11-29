import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  
  Getuser : any ;
constructor(public reactive : ActivatedRoute){}
  ngOnInit(): void {
    this.Getuser = JSON.parse(this.reactive.snapshot.paramMap.get('menbro') as string);
    console.log(this.Getuser)

  }


}
