import React from 'react';
import Imagen from "./Imagen";

const ListImagen = ({imagenes}) => {
    return ( 
        <div className="col-12 p-5 row">
            {imagenes.map(item =>(
                <Imagen
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
     );
}
 
export default ListImagen;