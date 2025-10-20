import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from '../Titulo/index';
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../imagens/livro2.png';
import styled from "styled-components";


const UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`


const NovosLivrosContainer = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
`

const ImgLivros = styled.img`
    width: 150px;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={"#000"}
                tamanhoFonte={"36px"}
            >Ultimos Lancamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <ImgLivros src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo = {"Tavez Você se interesse por..."}
                subtitulo = {"Angular 11"}
                descricao = {"Construindo uma aplicação com a plataforma."}
                img = {imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;