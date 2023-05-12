function calcularPrecio(precioBase, descuento) {
    if (precioBase <= 0 || descuento < 0 || descuento > 100) {
      return "Los valores ingresados son inválidos";
    }

    if (descuento === 0) {
      return "El precio final sin descuento es $" + precioBase;
    } else {
      var precioFinal = precioBase - (precioBase * (descuento / 100));
      return "El precio final con descuento es $" + precioFinal;
    }