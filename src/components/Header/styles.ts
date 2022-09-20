import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  background: url('/assets/backgroundHeader.svg') no-repeat;
  background-size: cover;
`
export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  height: 18.5rem;
  display: flex;
  justify-content: center;

  > .logo {
    align-self: center;
    padding-bottom: 2rem;
  }
`
