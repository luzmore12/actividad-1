function calcularprecio(preciobase, descuento){
  if(preciobase <= 0 || descuento <0 || descuento > 100)
      {return "Los valores ingresados son inválidos"};
  
      if (descuento == 0)
      {return " precio base sin descuento" + preciobase}; 
  
      if (descuento > 0 && descuento <= 100){
          var preciofinal = preciobase - preciobase * descuento / 100;
          return " El precio final con descuento es $" + preciofinal
      }
  }
  console.log (calcularprecio (-13, 20))