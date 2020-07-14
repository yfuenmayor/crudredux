import React, { useState, useEffect} from 'react';
// Funciones para ejecutar las acciones de redux
import { useDispatch, useSelector } from 'react-redux';
//Funcion para redireccionar
import { useHistory } from 'react-router-dom';


// Actions Redux
import { editarProductoAction } from '../actions/productosAction';

const EditarProducto = () => {

    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    });

    // useDispatch para ejecitar las funciones de los actions 
    const dispatch = useDispatch();
    const history = useHistory();

    // useSelector para obtener los states del store
    const productoEdit = useSelector(state => state.productos.editarproducto);
    const { nombre, precio } = producto;

    useEffect(() => {
        setProducto(productoEdit)
    }, [productoEdit]);

    const leerDatos = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    
    const submitEdicion = e => {
        e.preventDefault();

         // Validacion
         if (nombre.trim() === '' || precio.trim() <= '0') {
            return;
        }

        //Enviando a la api la edicion 
        dispatch( editarProductoAction(producto) );

        //Redireccion al ABM
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center text-info mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form 
                            onSubmit={ submitEdicion }
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    placeholder="Nombre del producto"
                                    value={nombre}
                                    onChange= {leerDatos}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Precio</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    name="precio"
                                    placeholder="100.00"
                                    value={precio}
                                    onChange= {leerDatos}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-info w-100"
                            >Editar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarProducto;