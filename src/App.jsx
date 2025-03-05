// Importar React y los componentes
import React from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent'; // Nueva importación

// Definir el componente funcional App
function App() {
  return (
    <div>
      <h1>Mi Primera Aplicación con React</h1>
      {/* Usar el componente de clase */}
      <ClassComponent />
      {/* Usar el componente funcional */}
      <FunctionalComponent />
    </div>
  );
}

// Exportar el componente App
export default App;