import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Escuela de administracion y mercadotecnia';
  name = '';
  surname = '';
  select = '';
  email = '';
  bond = '';
  masculino = 'Masculino';
  femenino = 'Femenino';

  nombre = 'Nombre';
  apellido = 'Apellido';
  genero = 'Genero';
  correo = 'Email';
  cedula = 'Cedula';


  name_nuevo = '';
  surname_nuevo = '';
  select_nuevo = '';
  email_nuevo = '';
  bond_nuevo = '';

  url = 'https://www.eam.edu.co/wp-content/uploads/2021/10/logoo.png';

  guardarDatos(){
      this.name_nuevo = this.name;
      this.name = '';
      this.surname_nuevo = this.surname;
      this.surname = '';
      this.select_nuevo = this.select;
      this.select = '';
      this.email_nuevo = this.email;
      this.email = '';
      this.bond_nuevo = this.bond;
      this.bond = '';
  }
}
