import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

export type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
