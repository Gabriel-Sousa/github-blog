import styled from 'styled-components'
export const HomeContainer = styled.div``

export const HomeContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  margin-top: -5rem;
`

export const HeaderOfHome = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  border-radius: 10px;

  padding: 2.5rem;

  background: ${(props) => props.theme['gray-750']};
  color: ${(props) => props.theme['gray-100']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  .headerOfAbout {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    > span {
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.3;
    }

    a {
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

  p {
    color: ${(props) => props.theme['gray-300']};

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  footer {
    margin-top: 1.5rem;

    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.3rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    span {
      :first-child {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;

        color: ${(props) => props.theme['gray-200']};
      }

      :last-child {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

        color: ${(props) => props.theme['gray-400']};
      }
    }
  }

  input {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-500']};

    border: 0;
    border: 1px solid ${(props) => props.theme['gray-600']};
    outline: 1px solid ${(props) => props.theme['gray-600']};

    border-radius: 6px;
    padding: 0.75rem 1rem;

    :focus {
      border: 1px solid ${(props) => props.theme['blue-500']};
      outline: 1px solid ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 2fr));
  justify-content: center;

  margin-top: 3rem;
  grid-gap: 2rem;

  .card {
    width: 26rem;
    padding: 2rem;
    border-radius: 10px;
    background: ${(props) => props.theme['gray-700']};
    border: 2px solid transparent;

    cursor: pointer;

    :hover {
      border: 2px solid ${(props) => props.theme['gray-500']};
    }

    .titleCard {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;

      span {
        margin-bottom: 1.25rem;

        :first-of-type {
          /* width: 80%; */
          font-style: normal;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 160%;
          color: ${(props) => props.theme['gray-100']};
        }
        :last-of-type {
          margin-top: 3px;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 160%;

          color: ${(props) => props.theme['gray-400']};
        }
      }
    }

    p {
      width: 100%;
      overflow-y: hidden;
      text-overflow: ellipsis;

      height: 6rem;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: ${(props) => props.theme['gray-300']};
    }
  }
`
