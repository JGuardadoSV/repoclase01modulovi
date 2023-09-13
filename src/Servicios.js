import React, { useEffect } from "react";
import Inicio from "./Inicio";

function Servicios() {

  const usuario=
{
  
  "nombre":"Roberto Perez",
  "clave":"12345678",
  "email":"clase03@gmail.com"
  
}


function FEnviar  () {

 
    //POST localhost:3000/auth/registrar
  //Method for POST request
  fetch("http://localhost:3000/auth/registrar", {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })


}

  return (
    <div className="container">

      <button className="btn btn-primary" onClick={FEnviar}>Enviar</button>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            EMAIL
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            CLAVE
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
}
export default Servicios;
