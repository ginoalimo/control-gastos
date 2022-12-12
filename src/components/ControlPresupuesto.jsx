import { useEffect, useState } from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  const formatCurrency = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span>
          {formatCurrency(presupuesto)}
        </p>

        <p>
          <span>Available: </span>
          {formatCurrency(disponible)}
        </p>

        <p>
          <span>Spent: </span>
          {formatCurrency(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
