import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  listPersona: any[]=[
    {cod_persona:2048,nom_persona: 'Raul',fec_nacimiento:'10/10/1997',Sueldo:500,cod_sector:1,cod_zona:1  },
    {cod_persona:2058,nom_persona: 'Allison',fec_nacimiento:'12/10/1997',Sueldo:700,cod_sector:2,cod_zona:1  },
    {cod_persona:2068,nom_persona: 'Francisco',fec_nacimiento:'11/10/1997',Sueldo:600,cod_sector:3,cod_zona:1  },
  ];
  listPersona11: any[]=[];
  listSector: any[]=[];
  listZona : any[]=[];
form: FormGroup;
  constructor(private fb: FormBuilder,
    private _personaService: PersonaService) {
    this.form=this.fb.group({
     cod_persona:[''],
     nom_persona:[''],
     fec_nacimiento:[''],
     sueldo:[''],
     cod_sector:[''],
     cod_zona:['']
     
    })
   }

   ///esto es para lo que viene inicializado la pagina 
  ngOnInit(): void {
    this.obtenerPersona();
    this.obtenerSector();
    this.obtenerZona();
  }
  
  
  obtenerPersona001(){
    this._personaService.getListPersona().subscribe(data =>{
      console.log(data);
      this.listPersona=data;
    },error =>{
      console.log(error);
    })
  }

obtenerPersona(){
  this._personaService.getListPersona().subscribe(data =>{
    console.log(data);
    this.listPersona=data;
  },error =>{
    console.log(error);
  })
}
/*SECTOR  */
obtenerSector(){
  this._personaService.getListSector().subscribe(data =>{
    console.log(data);
    this.listSector=data;
  },error =>{
    console.log(error);
  })
}
/*ZONA  */
obtenerZona(){
  this._personaService.getListZona().subscribe(data =>{
    console.log(data);
    this.listZona=data;
  },error =>{
    console.log(error);
  })
}


agregarPersona(){
const persona: any={
  cod_persona: this.form.get('cod_persona')?.value,
  nom_persona: this.form.get('nom_persona')?.value,
  fec_nacimiento: this.form.get('fec_nacimiento')?.value,
  sueldo: this.form.get('sueldo')?.value,
  cod_sector: this.form.get('cod_sector')?.value,
  cod_zona: this.form.get('cod_zona')?.value,
}
this._personaService.savePersona(persona).subscribe(data => {
  this.obtenerPersona();
  this.form.reset();
},error => {
  console.log(error);
})

}

eliminarPersona(id : number){
  this._personaService.deletePersona(id).subscribe(data => {
    this.obtenerPersona();
  }, error => {
    console.log(error);
  })
  }


  consultarPersona(){
    this._personaService.getListPersona().subscribe(data => {
      this.obtenerPersona001();
    }, error => {
      console.log(error);
    })
    }





 }


