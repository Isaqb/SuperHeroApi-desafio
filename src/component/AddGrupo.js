import React from "react";
import "./AddGrupo.css"
const AddGroup=(props)=>{
    const { heros } = props.location.state
    //console.log(heros)
    return(
        <>
            <h1 className="titulo">Grupos</h1>
            <div>
                {heros.map(hero=>{
                     return(
                        <div className="cardbox" key={hero?.id}>
                            <p><b>Nome:</b> {hero?.name}</p>
                            <img className="heroImg" alt={hero?.name} src={hero?.image.url}></img>
                        </div>
                    );
                })}

            </div>
        </>
    );
}

export default AddGroup;