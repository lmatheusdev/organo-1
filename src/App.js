import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState (
    [
    {
      id: uuidv4(),
      nome: 'Avós Paternos',
      cor: '#FF8129'
    },
    {
      id: uuidv4(),
      nome: 'Avós maternos',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Pais',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Filhos',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Filhas',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Bebês',
      cor: '#E06B69'
    }
  ]
  )


  const inicial = [
    {
      favorito: false,
      id: uuidv4(),
      nome: 'EDELSIO MARQUES',
      cargo: 'Avô paterno',
      imagem: 'https://drive.google.com/thumbnail?id=1gJ0cINW60OegEaTu9zIWbRtCkMkpP-1T',
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'TANIA MARQUES',
      cargo: 'Vó paterna',
      imagem: 'https://drive.google.com/thumbnail?id=11tNOXtTfK09W-Vvke3i5k08mIqlsROmb',
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'ANDRÉ FERRAZ',
      cargo: 'Avô materno',
      imagem: 'https://drive.google.com/thumbnail?id=1rUVmUiBIxODvDg7FhU95ra2MRyrk9Uks',
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'LÚCIA FERRAZ',
      cargo: 'Vó materna',
      imagem: 'https://drive.google.com/thumbnail?id=1wQ4VfDpkZoO4UiUYha0C9RtxgVF-XFC7',
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'WELLINGTON MARQUES',
      cargo: 'Ótimo pai, pastor e músico',
      imagem: 'https://drive.google.com/thumbnail?id=10FtZLfLC9ODLOCuVm2m1PCnngfMwG2cD',
      time: times[2].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'ADRIANA MARQUES',
      cargo: 'Mãe muito amorosa, com um coração enorme, e muitas habilidades culinárias',
      imagem: 'https://drive.google.com/thumbnail?id=1u5LVZwnBsKp1FgniXhA3r6UtH6vCUM6w',
      time: times[2].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'LEANDRO SOUZA',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://drive.google.com/thumbnail?id=1stTQcSwI1eNC-tz4uCITErq2B0WmbbGz',
      time: times[3].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'JOÃO MARQUES',
      cargo: 'Músico. O mais alto da família, e contador de piadas sem graça nas horas vagas',
      imagem: 'https://drive.google.com/thumbnail?id=1MnAwdNN-cCU686jFh-8d-uueW0jdfqnj',
      time: times[3].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'GUSTAVO MARQUES',
      cargo: 'Muito talentoso, grande violista. Zé preguiça.',
      imagem: 'https://drive.google.com/thumbnail?id=1WcP2IX-Jj_Q41SkfV0XiuFTjacthJqDk',
      time: times[3].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'SAMARA MARQUES',
      cargo: 'Comécio exterior. É a mais intolerante da família, mas têm um grande coração',
      imagem: 'https://drive.google.com/thumbnail?id=1METrn-ztxhsacxRX16k1Lls8eg6QuvQA',
      time: times[4].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'SAMYRA MARQUES',
      cargo: 'Fisioterapeuta. Um amor de pessoa, calma, mas eu aconselho não estressa-la',
      imagem: 'https://drive.google.com/thumbnail?id=1kEFVPO9Jn6pikz4xeKzWsF_e2v0oZdPT',
      time: times[4].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'ISRAEL MARQUES',
      cargo: 'O caçula. Com toda certeza é o loirinho mais fofo que você verá hoje',
      imagem: 'https://drive.google.com/thumbnail?id=1FrHggEsFBLW7a2Ec1bZ0kvfli6nZndfu',
      time: times[5].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'NEHEMIAS MARQUES',
      cargo: 'Um amor de criança. Tem mais energia que uma usina elétrica',
      imagem: 'https://drive.google.com/thumbnail?id=16tSg60efFvyCGCuJLcC5HcFpfBb5pGqz',
      time: times[5].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaboradores => colaboradores.id !== id))
  }

  const aoNovoTime = (novoTime) => {
        setTimes([...times, { ...novoTime, id: uuidv4()}])
    }

  const aoFavoritar = (id) => {
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador
      }))
    }

  return (
    <div>
      <Banner />
      <Formulario 
        novoTime={aoNovoTime} 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Arvore geneálogica</h1>
        {times.map((time, indice) => 
          <Time 
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            aoFavoritar={aoFavoritar}
          />
        )}
      </section>

       
      <Rodape />
    </div>
  );
}

export default App;
