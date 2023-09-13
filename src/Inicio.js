import React, { useEffect } from 'react';

function Inicio() {

const [usuarios, setUsuarios] = React.useState([])

useEffect(() => {

    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => setUsuarios(data))
    .catch (error => console.log(error))

},[])

  return (
    <div className='container'>
        <div>
            <h1>Listado de usuarios</h1>
            
            <table className='table table-dark table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.usuarioId}>
                            <td>{usuario.email}</td>
                            <td>{usuario.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
export default Inicio;