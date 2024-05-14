import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    // aqui usamos o outlet para sempre deixar o header fixo, e mostrar os conteudos
    // variaveis atraves dele, como a variação entre home e history por exemplo
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
