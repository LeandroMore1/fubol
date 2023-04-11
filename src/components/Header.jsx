import { useState,useEffect } from "react"
import { pibes } from "../dataBase.js"
import chapo from "./chapo.png"
import lore from "./lore.png"
import fran from"./fran.png"
import pes from "./pes.png"
import joaco from "./joaco.png"
import drupi from "./drupi.gif"
import manolo from "./manu.png"
import pulpo from "./pulpo.png"
import monke from "./monke.gif"
import juli from "./juli.png"
import "../components/Header.css"

export const Header = () => {

    const [muchachos, setMuchachos] = useState([])
    
    let nomb = muchachos.map(el=> el.nombre)
    let bestPlayer = muchachos.find(el=> Math.max(el.mvp))
    let i = 1 
    
    
    const compare = (a, b) => {
        if (a.goles < b.goles) {
            return 1;
        }
        if (a.goles > b.goles) {
            return -1;
        }
        return 0;
    }
        
    const obtenerLista= () =>{
        const data = Promise.resolve(pibes)

        data.then((el) => setMuchachos(el.sort(compare)))
    }
    useEffect(()=>{
            obtenerLista();
    },[muchachos])

    


    return (

        <>
        <div className="contTitle">
            <h1>Defensores del kush</h1>
            <img className="monke" src={monke} alt="" />
            </div>
            <div className="containerFotos container">
            <img src={drupi} alt="" />
            <img src={chapo} alt="" />
            <img src={joaco}alt="" />
            <img src={lore} alt="" />
            <img src={pes} alt="" />
            <img src={manolo} alt="" />
            <img src={fran} alt="" />
            <img src={pulpo} alt="" />
            <img src={juli} alt="" />
            </div>
           <h1>Tabla de posiciones:</h1>
            <div className="containersub">
                <div className="contSub">
                <h2>Goleador 🦍: </h2>
                <img className="imgSub" src={pes} alt="" />
                </div>
                <div className="contSub">
                <h2>El muerto 🐕: </h2>
                <img className="imgSub" src={juli} alt="" />
                </div>
                <div className="contSub">
                <h2>Mejor jugador 🏆: </h2>
                <img className="imgSub" src={pes} alt="" />
                </div>
            </div>
          
            <div className="container tabla">



                <table className="table" >
                    <thead>
                        <tr>
                            <th>Pos.</th>
                            <th>Nombre</th>
                            <th>Goles ⚽️</th>
                            <th>Ganó 🦍</th>
                            <th>Perdió 🥶</th>
                            <th>MVP 🏅</th>
                        </tr>
                    </thead>
                    {
                        muchachos.map(jugador => (
                            <tbody key={jugador.id}>
                                <tr>

                                    <td className="d-flex">{i++}{i - 1 === 1 ? " 🥇" : i - 1 === 2 ? " 🥈" : i - 1 === 3 ? " 🥉" : i - 1 === 9 ? " 👻" : <p></p>}</td>
                                    <td>{jugador.nombre}</td>
                                    <td>{jugador.goles}</td>
                                    <td>{jugador.ganados}</td>
                                    <td>{jugador.perdidos}</td>
                                    {jugador.mvp > 0 ?
                                        <td>{jugador.mvp} ⭐️</td> : <td>{jugador.mvp}</td>
                                    }
                                </tr>

                            </tbody>
                        ))
                    }

                </table>
            </div>

        </>

    )
}                   