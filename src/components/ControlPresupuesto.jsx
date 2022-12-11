import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const formatCurrency = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica</p>

        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>{formatCurrency(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{formatCurrency(0)}
            </p>

            <p>
                <span>Gastado: </span>{formatCurrency(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto