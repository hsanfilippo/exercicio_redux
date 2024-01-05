import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { Produto as ProdutoType } from '../../App'
import { addCarrinho } from '../../store/reducers/carrinho'
import { addOuRemoveFavoritos } from '../../store/reducers/favoritos'

import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const [favoritoBtnMsg, setFavoritoBtnMsg] = useState(
    '+ Adicionar aos favoritos'
  )
  const [isFavorito, setIsFavorito] = useState(true)

  const toggleIsFavorito = () => {
    const novoEstado = !isFavorito

    setIsFavorito(novoEstado)

    setFavoritoBtnMsg(
      novoEstado ? '+ Adicionar aos favoritos' : '- Remover dos favoritos'
    )

    dispatch(addOuRemoveFavoritos(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={toggleIsFavorito} type="button">
        {favoritoBtnMsg}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(addCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
