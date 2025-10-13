import styled from 'styled-components';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul`
display: flex;
`
function OpcoesHeader() {
  return (

    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao><p>{texto}</p></Opcao>
      ))}
      {/* O React pega o array de <li> que o map gerou e renderiza tudo dentro da <ul> */}
    </Opcoes>
  )
}

export default OpcoesHeader;