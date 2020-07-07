import React, { Fragment, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosAction';
import Producto from './Producto';

const Productos = () => {

    //Usamos useDispatch para obtener la funcion del action
    const dispatch = useDispatch();

    //Un Effect para que se ejecute la primera vez automaticamente
    useEffect(() => {
        //Funcion para invocar al action 
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
    }, [])

    // Obtenemos los productos del State de productos del redux
    const productos = useSelector(state => state.productos.productos);
    // console.log(productos);
    
    return (
        <Fragment>
            <h2 className="text-center my-5 text-info">Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-dark table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                     { productos.length === 0 ? 'No hay Productos' : (
                         productos.map( producto => (
                             <Producto 
                                key={producto.id}
                                producto={producto}
                             />
                         ))
                     )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default Productos;
