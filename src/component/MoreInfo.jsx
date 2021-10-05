import React from "react";
import "./MoreInfo.css";
/*
type Hero = {
    name: String;
    powerstats: {
        intelligence: String;
        strength: String;
        speed: String;
        durability: String;
        power: String;
        combat: String;
    }
    biography:{
        full-name: String;
        alter-egos: String;
        aliases: String;
        place-of-birth: String;
        first-appearance: String;
        publisher: String;
        alignment: String;
    }
    work:{
        occupation: String;
        base: String;
    }
    conection:{
        group-affiliation: String;
        relatives: String;
    }
    image:{
        url: String;
    }
}
*/
const MoreInfo = props => {
    const {closeDropdown, className, modalRef, h,ht} = props;

    
    
    return(
        <div ref={modalRef} id={h} hero={ht} className={`${className} modal`}>
            <button onClick={closeDropdown(ht.id)}>X</button>
            <h1><b>Name: </b> {ht.name}</h1>
            <img className="heroImg" src={ht.image.url} alt={ht.name}/>
            <h2><b>Appearance</b></h2>
            <div className="box">
            <p><b>Eye color: </b>{ht.appearance['eye-color']}</p>
            <p><b>Gender: </b>{ht.appearance.gender}</p>
            <p><b>Hair color: </b>{ht.appearance['hair-color']}</p>
            <p><b>Height: </b>{ht.appearance.height[1]}</p>
            <p><b>Weight: </b>{ht.appearance.weight[1]}</p>
            <p><b>Race: </b>{ht.appearance.race}</p>
            </div>
            <h2><b>Powerstats</b></h2>
            <br/>
            <div className="box">
                <p><b>Intelligence: </b>{ht.powerstats.intelligence}</p>
                <p><b>Strength: </b>{ht.powerstats.strength}</p>
                <p><b>Speed: </b>{ht.powerstats.speed}</p>
                <p><b>Durability: </b>{ht.powerstats.durability}</p>
                <p><b>Power: </b>{ht.powerstats.power}</p>
                <p><b>Combat: </b>{ht.powerstats.combat}</p>
            </div>
            <h2><b>Biography</b></h2>
            <div className="box">
            <p><b>Full name: </b>{ht.biography['full-name']}</p>
            <p><b>Alter egos: </b>{ht.biography['alter-egos']}</p>
            <p><b>Aliases: </b>{ht.biography.aliases}</p>
            <p><b>Place of birth: </b>{ht.biography["place-of-birth"]}</p>
            <p><b>First appearance: </b>{ht.biography['first-appearance']}</p>
            <p><b>Publisher: </b>{ht.biography.publisher}</p>
            <p><b>Alignment: </b>{ht.biography.alignment}</p>
            </div>
            <br/>
            <h2><b>Work</b></h2>
            <div className="box">
            <p><b>Occupation: </b>{ht.work.occupation}</p>
            <p><b>Base:</b>{ht.work.base}</p>
            </div>
            <br/>
            <h2><b>Connection</b></h2>
            <div className="box">
            <p><b>Group affiliation:</b>{ht.connections['group-affiliation']}</p>
            <p><b>Relatives:</b>{ht.connections.relatives}</p>
            </div>
            <br/>
        </div>
    )
}

export default MoreInfo;
/*
"name":"A-Bomb",
"powerstats":{"intelligence":"38","strength":"100","speed":"17","durability":"80","power":"24","combat":"64"},
"biography":{"full-name":"Richard Milhouse Jones","alter-egos":"No alter egos found.","aliases":["Rick Jones"],"place-of-birth":"Scarsdale, Arizona","first-appearance":"Hulk Vol 2 #2 (April, 2008) (as A-Bomb)","publisher":"Marvel Comics","alignment":"good"},
"appearance":{"gender":"Male","race":"Human","height":["6'8","203 cm"],"weight":["980 lb","441 kg"],"eye-color":"Yellow","hair-color":"No Hair"},
"work":{"occupation":"Musician, adventurer, author; formerly talk show host","base":"-"},
"connections":{"group-affiliation":"Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom","relatives":"Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"},
"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10060.jpg"}
*/