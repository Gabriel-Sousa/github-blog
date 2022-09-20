import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'} className="logo">
          <img src="/assets/logo.svg" alt="" />
        </Link>
      </HeaderContent>
    </HeaderContainer>
  )
}
