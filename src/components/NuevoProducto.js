import React, { useState } from 'react';
// Funciones para ejecutar las acciones de redux
import { useDispatch, useSelector } from 'react-redux';

// Actions Redux
import { crearProductoAction } from '../actions/productosAction';

const NuevoProducto = ({ history }) => {
    // STATES LOCALES //
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    });

    // DESTRUCTURING //
    const { nombre, precio } = producto;

    // useDispatch para ejecitar las funciones de los actions 
    const dispatch = useDispatch();

    // useSelector para obtener los states del store
    const productos = useSelector(state => state.productos);
    const { loading, error } = productos;
    
    //Manda a llamar la funcion del action necesario 
    const agregarProducto = producto => dispatch( crearProductoAction(producto) );

    // Funciones
    const changeDatos = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario haga submit
    const submitNuevo = e => {
        e.preventDefault()

        // Validacion
        if (nombre.trim() === '' || precio.trim() <= '0') {
            return;
        }


        //Verificacion de errores


        //Creacin de nuevo producto
        agregarProducto(producto);

        //Redireccion al ABM
        history.push('/');


    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center text-info mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form 
                            onSubmit={submitNuevo}
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    placeholder="Nombre del producto"
                                    value={nombre}
                                    onChange={ changeDatos }
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
                                    onChange={ changeDatos }
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-info w-100"
                            >Agregar
                            </button>
                        </form>
                        { loading ? <p>Cargando...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;