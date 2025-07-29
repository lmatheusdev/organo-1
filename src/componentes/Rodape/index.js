import './rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://facebook.com" target="_blank" rel='noopener noreferrer'>
                    <img src="/imagens/facebook.png" alt="Icone do facebook" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel='noopener noreferrer'>
                    <img src="/imagens/twitter.png" alt="Icone do x" />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel='noopener noreferrer'>
                    <img src="/imagens/instagram.png" alt="Icone do instagram" />
                </a>
            </li>
        </ul>
       </section>
       <section className='logo'>
        <img src='/imagens/familia-marques-logo.png'></img>
       </section>
       <section>
        <p>
            Desenvolvido por Leandro Souza.
        </p>
       </section>
    </footer>)
}

export default Rodape