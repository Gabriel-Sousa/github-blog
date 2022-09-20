import styled from 'styled-components'

export const PostContainer = styled.div``

export const PostContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  margin-top: -5rem;
`

export const HeaderOfPost = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;

  padding: 2.5rem;

  background: ${(props) => props.theme['gray-750']};
  color: ${(props) => props.theme['gray-100']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  .actionOfHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    > a:first-of-type {
      display: flex;
      align-items: center;
      gap: 0.625rem;

      text-decoration: none;
      color: ${(props) => props.theme['blue-500']};

      cursor: pointer;
    }

    > a:last-of-type {
      height: 100%;
      text-decoration: none;
      color: ${(props) => props.theme['blue-500']};
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1.6;

      :hover {
        border-bottom: 1px solid ${(props) => props.theme['blue-500']};
      }
    }
  }

  .titlePost {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-100']};
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['gray-400']};
      svg {
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`

export const MainContainer = styled.main`
  padding: 2.5rem 2rem;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme['gray-300']};
    margin-top: 1rem;
  }

  a {
    color: ${(props) => props.theme['blue-500']};
    text-decoration: none;

    transition: border-bottom 0.2s ease-in-out;
    :hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-500']};
    }
  }

  pre {
    padding: 1rem;
    background: ${(props) => props.theme['gray-700']};
    color: white;
    text-align: left;
    border-radius: 2px;
    margin-top: 1.5rem;
  }
`
