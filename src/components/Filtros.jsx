import { useState, useEffect } from "react";

const Filtros = ( { filtro, setFiltro } ) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filtro">Filter</label>
          <select name="" id="" value={filtro} onChange={ e => setFiltro(e.target.value) }>
            <option value="">Categories</option>
            <option value="ahorro">Savings</option>
            <option value="comida">Food</option>
            <option value="casa">Home</option>
            <option value="ocio">Hobby</option>
            <option value="salud">Health</option>
            <option value="suscripciones">Subscriptions</option>
            <option value="otros">Others</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
