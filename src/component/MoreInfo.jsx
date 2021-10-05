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
    const { className, modalRef, h,ht} = props;
    
    return(
        <div ref={modalRef} id={h} hero={ht} className={`${className} modal`}>
            <p>{h}</p>
            <p><b>Name:</b> {ht.name}</p>
            <img className="heroImg" src={ht.image.url} alt={ht.name}/>
            <p><b>Appearance</b></p>
            <div>
            <p><b>eye-color</b>{ht.appearance.eyecolor}</p>
            <p><b>gender</b>{ht.appearance.gender}</p>
            <p><b>hair-color</b>{ht.appearance.haircolor}</p>
            <p><b>height</b>{ht.appearance.height[1]}</p>
            <p><b>weight</b>{ht.appearance.weight[1]}</p>
            <p><b>race</b>{ht.appearance.race}</p>
            </div>
            <p><b>Powerstats</b></p>
            <br/>
            <div>
                <p><b>intelligence</b>{ht.powerstats.intelligence}</p>
                <p><b>strength</b>{ht.powerstats.strength}</p>
                <p><b>speed</b>{ht.powerstats.speed}</p>
                <p><b>durability</b>{ht.powerstats.durability}</p>
                <p><b>power</b>{ht.powerstats.power}</p>
                <p><b>combat</b>{ht.powerstats.combat}</p>
            </div>
            <p><b>Biography</b></p>
            <div>
            <p><b>full-name</b>{ht.biography.fullname}</p>
            <p><b>alter-egos</b>{ht.biography.alteregos}</p>
            <p><b>aliases</b>{ht.biography.aliases}</p>
            <p><b>place-of-birth</b>{ht.biography.placeofbirth}</p>
            <p><b>first-appearance</b>{ht.biography.firstappearance}</p>
            <p><b>publisher</b>{ht.biography.publisher}</p>
            <p><b>alignment</b>{ht.biography.alignment}</p>
            </div>
            <br/>
            <p><b>Work</b></p>
            <div>
            <p><b>occupation</b>{ht.work.occupation}</p>
            <p><b>base</b>{ht.work.base}</p>
            </div>
            <br/>
            <p><b>Connection</b></p>
            <div>
            <p><b>group-affiliation</b>{ht.connections.groupaffiliation}</p>
            <p><b>relatives</b>{ht.connections.relatives}</p>
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