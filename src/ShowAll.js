import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import api from "./service/api";
import "./App.css";
import MoreInfo from "./component/MoreInfo";

export default function ShowAll() {

  function CallApi(id) {
    const [hero, setHero] = useState();
    useEffect(() => {
      api
        .get(id)
        .then((response) => setHero(response.data))
        .catch((err) => {
          console.error("Ocorreu um erro:" + err);
        });
    }, [id]);
    return hero;
  }

  const listHeroes = [];

  for (let i = 1; i <= 731; i++) {
    let r = CallApi(i.toString())
    if (r !== undefined) {
      if (r.image !== undefined) {
        if (r.image.url !== undefined) {
          listHeroes.push(r);
        }
      }

    }
  }

  const modalRef = useRef(null);

  const toggleDropdown = (id) => {
    document.getElementById(id).classList.add('show');
  }

  const closeDropdown = (id) => {
    document.getElementById(id).classList.remove('show');
  };


  return (
    <>
      <div>
        <Link className="group" to={{ pathname: `/groups`, state: { heros: listHeroes } }} > Grupos</Link>
      </div>
      <div key='super_people'>
        {listHeroes.map(h => {
          return (
            <div className="card" key={h?.id}>
              <p><b>Nome:</b> {h?.name}</p>
              <img className="heroImg" alt={h?.name} src={h?.image.url}></img>
              <p><b>Publicado:</b> {h?.biography.publisher} </p>
              <button className="maisInfo" onClick={() => toggleDropdown(h?.id)}>Mais Informações</button>
              <MoreInfo closeDropdown={closeDropdown} heros={h} modalRef={modalRef} />
            </div>
          );

        })}

      </div>
    </>
  );
}
