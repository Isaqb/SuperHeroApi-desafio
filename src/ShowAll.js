import React, { useEffect, useState} from "react";
import api from "./service/api";
import  "./App.css";

export default function ShowAll(){
    
    function CallApi(id){
      const [hero, setHero] = useState();
      useEffect(() => {
        api
          .get(id)
          .then((response) => setHero(response.data))
          .catch((err) => {
            console.error("Ocorreu um erro:" + err);
          });
      }, []);
      return hero;
    }
    
    const listHeroes = [];

    for(let i= 1 ; i<=731;i++){
      let r = CallApi(i.toString())
      if(r !== undefined){
        if(r.image !== undefined){
          if(r.image.url !== undefined){
            listHeroes.push(r);
          }
        }
        
        }
      }
      
    
    return (
      <div key='super_people'>
        {listHeroes.map(h => {
          return(
            <div className="card" key={h?.id}>
              <p>Nome: {h?.name}</p>
              <img className="heroImg" src={h?.image.url}></img>
              <p >Publicado: {h?.biography.publisher} </p>
              <button  className="maisInfo">Mais Informações</button>
            </div>
        );
          
        })}
        
      </div>
    );
}