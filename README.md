# botonMenuReusable
Crearemos un boton reusable.
@Input()
Interface del Boton 
Modulos de Boton de menus de Angular Material.

# Uso del botón:

  1. En el componente donde usemos el boton debemos crear un signal() del listado de botones que vamos a presentar , de la siguiente manera:
    *** NUESTRO SIGNAL ES DE TIPO <ANY> PORQUE TOMARIA EL TIPO DESDE EL BOTON REUSABLE, PERO SI ES NECESARIO TIPARLO PARA EVITAR ERRORES DE TYPESCRIPT ***

         export class MiComponentPadre {
     
           products = signal<any>([]);

           }
         
  2. Si los botones de menú no dependen de un abse de datos en la nube,
     entonces usamos el constructor para inicilizar las variables cuando el componente padre se cargue.

         constructor() {        
            this.products.set([
                { nombre: 'Impresoras', url: 'impresoras', icono: 'print' },
                { nombre: 'Redes', url: 'redes', icono: 'wifi' },
                { nombre: 'Computadores', url: 'cpmputadores', icono: 'print' }               
            ]);
         }
     3. En el HTML colocamos un @for para iterar los botones
