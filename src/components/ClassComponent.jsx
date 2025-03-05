// Importar React y Component desde la biblioteca de React
import React, { Component } from 'react';

// Definir el componente de clase
class ClassComponent extends Component {
  // El método render() es obligatorio en un componente de clase
  render() {
    return (
      <h2>Hola, soy un componente de clase</h2>
    );
  }
}

// Exportar el componente para que pueda ser usado en otros archivos
export default ClassComponent;