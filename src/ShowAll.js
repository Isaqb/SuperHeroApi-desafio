import React, { useEffect, useState, useRef} from "react";
import api from "./service/api";
import  "./App.css";
import MoreInfo from "./component/MoreInfo";

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
      }, [id]);
      return hero;
    }
    
    const listHeroes = [];

    for(let i= 1 ; i<=5;i++){
      let r = CallApi(i.toString())
      if(r !== undefined){
        if(r.image !== undefined){
          if(r.image.url !== undefined){
            listHeroes.push(r);
          }
        }
        
        }
      }

    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);

    const toggleDropdown = (id) => {
      console.log("show");
      //se clicar no botão, modal aparece
      //setDropdown("show");
      document.getElementById(id).classList.add('show');
      document.body.addEventListener("click", closeDropdown, true);
    }
    
    const closeDropdown = event => {
      event.stopPropagation(); //impede de executar listeners dos filhos
      const contain = modalRef.current.contains(event.target);
      if (!contain) { //se clicar fora do modal, ele DESaparece
        console.log("hidden");
        //document.getElementById(id).classList.remove('show');
        document.body.removeEventListener("click", closeDropdown, true);
      }
    };
    
    return (
      <div key='super_people'>
        {listHeroes.map(h => {
          return(
            <div className="card" key={h?.id}>
              <p><b>Nome:</b> {h?.name}</p>
              <img className="heroImg" alt={h?.name} src={h?.image.url}></img>
              <p><b>Publicado:</b> {h?.biography.publisher} </p>
              <button  className="maisInfo" onClick={()=>toggleDropdown(h?.id)}>Mais Informações</button>
              <MoreInfo className={dropdown} ht={h}  h={h.id} modalRef={modalRef}/>
            </div>
        );
          
        })}
        
      </div>
    );
}