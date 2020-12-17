import React,{useState} from 'react';

const Formulario = ({setBusqueda}) => {

    const [termino,setTermino]=useState('');

    const buscarImgSubmit = e =>{
        e.preventDefault();

        //Se envia termino hacia componente principal para usarlo en useEffect()
        setBusqueda(termino);
    } 

    return (
        <form
            onSubmit={buscarImgSubmit}
        >
            <div className="row">
                <div className="form-group col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Busca una imagen, ejemplo: Rosas o paisajes"
                        onChange={e=> setTermino(e.target.value.toLowerCase())}
                    />

                </div>
            </div>
        </form>
    );
}
 
export default Formulario;