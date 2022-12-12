import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import Cerrar from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState('')
  const [disabled, setDisabled] = useState(false);
  const [id, setId] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("All fields are required");

      setTimeout(() => {
        setMensaje("");
      }, 3000);

      return;
    }

    guardarGasto({ nombre, cantidad, categoria, id, fecha});
    setDisabled(true);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="Close modal icon" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.nombre ? 'Edit expense' : 'New expense'}</legend>
        <div className="campo">
          <label htmlFor="nombre">Expense name</label>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <input
            type="text"
            id="nombre"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Amount</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añade la cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Category</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="ahorro">Savings</option>
            <option value="comida">Food</option>
            <option value="casa">Home</option>
            <option value="ocio">Hobby</option>
            <option value="salud">Health</option>
            <option value="suscripciones">Subscriptions</option>
            <option value="otros">Others</option>
          </select>
        </div>

        <input type="submit" value={gastoEditar.nombre ? 'Save changes' : 'Add expense'} disabled={disabled} />
      </form>
    </div>
  );
};

export default Modal;
