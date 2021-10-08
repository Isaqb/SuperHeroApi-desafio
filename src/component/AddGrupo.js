import React, { useState } from "react";
import "./AddGrupo.css"

const AddGroup = (props) => {
    const { heros } = props.location.state;

    const [search, setSearch] = useState('');

    const filtered = search.length === 0 ? [] : heros.filter(
        h => h.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const addGroup = (hero) => {
        localStorage.setItem(hero.id, JSON.stringify(hero));
        window.location.reload();
    }

    const showHero = () => {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        return values;
    }

    return (
        <>
            <div className="grupos">
                <h1 className="titulo"> Meu Grupo</h1>
                <div className="grupos">
                    {showHero().map(f => {
                        return (
                            <div key={f?.id} className="card-group">
                                <p><b>Nome:</b> {f?.name}</p>
                                <img className="heroImg" alt={f?.name} src={f?.image.url}></img>
                            </div>
                        );
                    })}
                </div>
            </div>
            <br />
            <div className="grupos">
                <h1 className="titulo">Grupos</h1>
                <input className="input" type="text" onChange={(e) => handleSearch(e)} placeholder='Selecione seus hérois' />
                <div className="grupos">
                    {filtered.map(f => {
                        return (
                            <div key={f?.id} className="cardbox">
                                <p><b>Nome:</b> {f?.name}</p>
                                <img className="heroImg" alt={f?.name} src={f?.image.url}></img>
                                <button onClick={() => addGroup(f)}>Adicionar ao grupo</button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
}

export default AddGroup;