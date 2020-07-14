import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// REDUX //
import { useDispatch } from 'react-redux';
// ACTION //
import { eliminarProductoAction, obtenerProductoEdicion } from '../actions/productosAction';


const Producto = ({ producto }) => {

    //DESTRUCTURING
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory(); // Habilitando para la edicion

    // Confirmar si desea Eliminar
    const confirmarEliminarProducto = id => {
        // Confirmacion de eliminar
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Un producto que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si Eliminar!!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                //Pasarlo al action
                dispatch( eliminarProductoAction(id) );
            }
          })
    }

    //Funcion que activa el producto y redirecciona a la edicion
    const redireccionarEdicion = producto => {
        //Redireccionando
        dispatch( obtenerProductoEdicion(producto) );
        history.push(`/productos/editar/${producto.id}`)
    }
    

    return (
        <tr>
            <td>{ nombre }</td>
            <td><span className="font-weight-bold">$ { precio }</span></td>
            <td className="acciones">
                {/* <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link> */}
                <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={ () => redireccionarEdicion(producto)}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
};

export default Producto;