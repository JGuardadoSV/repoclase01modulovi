import React, { useState } from "react";

function Login() {
  //Login Data
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");

  async function FEnviar(e) {
    e.preventDefault();
    const usuario = { nombre: nombre, email: email, clave: clave };
    try {
    const response=  await fetch("http://localhost:3000/auth/registrar", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(async response => await response.json())
   

    if(response.statusCode!=200){
      alert("El usuario no se ha registrado");
    }else{
      alert("El usuario se ha registrado");
      //redireccionar a inicio
      window.location.href = "/";
    }	
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }

  
   
    
  }

  async function FAutenticar(e) {
    e.preventDefault();
    const datos = { email: email, clave: clave };
    //POST localhost:3000/auth/login
    const response=await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async (response) => await response.json())
    if(response.statusCode!=200){
      alert("Error en los datos de autenticacion");
    }else{
      localStorage.setItem("token", await response.token)
      alert("El usuario se ha autenticado");
      //redireccionar a inicio
      window.location.href = "/";
    }	
  }

  return (
    <div className="container">
      <h2>Autenticacion</h2>
      <form id="LoginForm" onSubmit={FAutenticar}>
       
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            EMAIL
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            CLAVE
          </label>
          <input
            onChange={(e) => setClave(e.target.value)}
            value={clave}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
