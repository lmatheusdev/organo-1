import { useState } from 'react'
import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, aoFavoritar }) => {

    // Controla a troca de cor de fundo de times
    const [inputColor, setInputColor] = useState(time.cor)

    const aoMudaCor = (evento) => {
        setInputColor(evento.target.value)
    }

    



    return (
        colaboradores.length > 0 && 
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(inputColor, '0.4') }}>
            <input className='input-color' type='color' value={inputColor} onChange={aoMudaCor}/>
            <h3 style={{ borderColor: inputColor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => 
                    <Colaborador 
                        key={indice} 
                        colaborador={colaborador} 
                        corDeFundo={inputColor}
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    />
                )}
            </div>
        </section>

    )
}

export default Time