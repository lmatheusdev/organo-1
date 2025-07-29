import './colaborador.css'
import { IoMdCloseCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    const propsfavorito = {
        size: 23,
        onClick: () => aoFavoritar(colaborador.id),
    }
    return (
    <div className="colaborador">
        <IoMdCloseCircle size={23} className='delColaborador' onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                ? <MdFavorite {...propsfavorito} color='red'/> 
                : <MdFavoriteBorder {...propsfavorito}/>
}
            </div>
        </div>
    </div>)
}

export default Colaborador