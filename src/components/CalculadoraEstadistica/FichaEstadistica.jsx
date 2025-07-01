import React from 'react';

const FichaEstadistica = ({ resultados }) => {
  return (
    <div>
      <h3>📊 Definiciones Estadísticas</h3>
      <ul>
        <li>
          <b>Media:</b> Es el promedio aritmético de los datos.
        </li>
        <li>
          <b>Mediana:</b> Es el valor central que separa la mitad superior de la mitad inferior de los datos.
        </li>
        <li>
          <b>Moda:</b> Es el valor que aparece con mayor frecuencia en el conjunto de datos.
        </li>
        <li>
          <b>Varianza Muestral:</b> Mide la dispersión de los datos respecto a la media, calculada para una muestra.
        </li>
        <li>
          <b>Varianza Poblacional:</b> Mide la dispersión de los datos respecto a la media, calculada para toda la población.
        </li>
        <li>
          <b>Desviación Muestral:</b> Raíz cuadrada de la varianza muestral, indica la dispersión de los datos.
        </li>
        <li>
          <b>Desviación Poblacional:</b> Raíz cuadrada de la varianza poblacional.
        </li>
        <li>
          <b>Rango:</b> Diferencia entre el valor máximo y mínimo de los datos.
        </li>
        <li>
          <b>Mínimo:</b> El valor más pequeño en el conjunto de datos.
        </li>
        <li>
          <b>Máximo:</b> El valor más grande en el conjunto de datos.
        </li>
      </ul>

      <h3>📊 Resultados Estadísticos</h3>
      <ul>
        <li><b>Media:</b> {resultados['Media']}</li>
        <li><b>Mediana:</b> {resultados['Mediana']}</li>
        <li><b>Moda:</b> {resultados['Moda']}</li>
        <li><b>Varianza Muestral:</b> {resultados['Varianza Muestral']}</li>
        <li><b>Varianza Poblacional:</b> {resultados['Varianza Poblacional']}</li>
        <li><b>Desviación Muestral:</b> {resultados['Desviación Muestral']}</li>
        <li><b>Desviación Poblacional:</b> {resultados['Desviación Poblacional']}</li>
        <li><b>Rango:</b> {resultados['Rango']}</li>
        <li><b>Mínimo:</b> {resultados['Mínimo']}</li>
        <li><b>Máximo:</b> {resultados['Máximo']}</li>
      </ul>
    </div>
  );
};

export default FichaEstadistica;
