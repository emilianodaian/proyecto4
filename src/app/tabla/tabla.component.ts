import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  {
  item=[
    {id:1,nombre:'ramiro',email:'ramiro@gmail.com'},
    {id:2,nombre:'luca',email:'luca@gmail.com'},
    {id:3,nombre:'daian',email:'daian@gmail.com'}
  ];
  constructor(){
  }
  ngOnInit(){
  }
}
