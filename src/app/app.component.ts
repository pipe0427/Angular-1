import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Formulario Eam';
  name = 'Nombre';
  surname = 'Apellido';
  select = 'Genero';
  email = 'Email';
  bond = 'Cedula';
  masculino = 'Masculino';
  femenino = 'Femenino';

  name_nuevo = '';
  surname_nuevo = '';
  select_nuevo = '';
  email_nuevo = '';
  bond_nuevo = '';

  guardarDatos(){
      this.name_nuevo = this.name;
      this.surname_nuevo = this.surname;
      this.select_nuevo = this.select;
      this.email_nuevo = this.email;
      this.bond_nuevo = this.bond;
  }
}
