import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} favoritos={favoritos} />
      </div>
    </Provider>
  )
}

export default App