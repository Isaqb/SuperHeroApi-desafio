import React from "react";
import "./MoreInfo.css";

const MoreInfo = props => {
    const {closeDropdown,modalRef,heros} = props;

    return(
        <div ref={modalRef} id={heros.id} heros={heros} className='modal'>
            <button onClick={()=>closeDropdown(heros.id)}>X</button>
            <h1><b>Name: </b> {heros.name}</h1>
            <img className="heroImg" src={heros.image.url} alt={heros.name}/>
            <h2><b>Appearance</b></h2>
            <div className="box">
                <p><b>Eye color: </b>{heros.appearance['eye-color']}</p>
                <p><b>Gender: </b>{heros.appearance.gender}</p>
                <p><b>Hair color: </b>{heros.appearance['hair-color']}</p>
                <p><b>Height: </b>{heros.appearance.height[1]}</p>
                <p><b>Weight: </b>{heros.appearance.weight[1]}</p>
                <p><b>Race: </b>{heros.appearance.race}</p>
            </div>
            <h2><b>Powerstats</b></h2>
            <br/>
            <div className="box">
                <p><b>Intelligence: </b>{heros.powerstats.intelligence}</p>
                <p><b>Strength: </b>{heros.powerstats.strength}</p>
                <p><b>Speed: </b>{heros.powerstats.speed}</p>
                <p><b>Durability: </b>{heros.powerstats.durability}</p>
                <p><b>Power: </b>{heros.powerstats.power}</p>
                <p><b>Combat: </b>{heros.powerstats.combat}</p>
            </div>
            <h2><b>Biography</b></h2>
                <div className="box">
                <p><b>Full name: </b>{heros.biography['full-name']}</p>
                <p><b>Alter egos: </b>{heros.biography['alter-egos']}</p>
                <p><b>Aliases: </b>{heros.biography.aliases}</p>
                <p><b>Place of birth: </b>{heros.biography["place-of-birth"]}</p>
                <p><b>First appearance: </b>{heros.biography['first-appearance']}</p>
                <p><b>Publisher: </b>{heros.biography.publisher}</p>
                <p><b>Alignment: </b>{heros.biography.alignment}</p>
            </div>
            <br/>
            <h2><b>Work</b></h2>
            <div className="box">
                <p><b>Occupation: </b>{heros.work.occupation}</p>
                <p><b>Base:</b>{heros.work.base}</p>
            </div>
            <br/>
            <h2><b>Connection</b></h2>
            <div className="box">
                <p><b>Group affiliation:</b>{heros.connections['group-affiliation']}</p>
                <p><b>Relatives:</b>{heros.connections.relatives}</p>
            </div>
            <br/>
        </div>
    )
}

export default MoreInfo;
