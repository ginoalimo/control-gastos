import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
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
        <CircularProgressbar value={porcentaje} 
        styles={buildStyles({
          pathColor: '#3b82f6',
          trailColor: '#f5f5f5'
        })}
        text={`${porcentaje}% Used`}
        />
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
