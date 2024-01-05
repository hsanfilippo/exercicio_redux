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
    addOuRemoveFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const indexDoProduto = state.itens.findIndex((p) => p.id === produto.id)

      if (indexDoProduto !== -1) {
        console.log('produto "', produto.id, '"', 'removido dos favoritos')
        state.itens.splice(indexDoProduto, 1)
      } else {
        console.log('produto "', produto.id, '"', 'adicionado aos favoritos')
        state.itens.push(produto)
      }
    }
  }
})

export const { addOuRemoveFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
