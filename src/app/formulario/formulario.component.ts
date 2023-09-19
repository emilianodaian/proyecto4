import { Component } from '@angular/core';
import { Validators,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  grupoFormulario=new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email])
  })

  funcionEnviar(){
    console.log(this.grupoFormulario.value);
  }



}
