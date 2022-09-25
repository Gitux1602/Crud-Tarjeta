import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  listatarjetas: any[] = [
    { titular: 'Gilberto Estrada', numtarjeta: '3132456565434456', fechaexp: '11/23', cvv: '218' }
  ];

  formulario: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {

    this.formulario = this.fb.group({
      titular: ['', Validators.required],
      numtarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaexp: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta() {

    const tarjeta: any = {
      titular: this.formulario.get('titular')?.value,
      numtarjeta: this.formulario.get('numtarjeta')?.value,
      fechaexp: this.formulario.get('fechaexp')?.value,
      cvv: this.formulario.get('cvv')?.value,
    }

    this.listatarjetas.push(tarjeta)
    this.toastr.success('La tarjeta fue registrada con exito', 'Tarjeta registrada');
    this.formulario.reset();

  }
  eliminarTarjeta(index: number) {
    this.listatarjetas.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada con exito', 'Tarjeta eliminada')
  }

}
