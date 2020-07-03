import React from 'react';

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center text-info mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    placeholder="Nombre del producto"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Precio</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    name="precio"
                                    placeholder="100.00"
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