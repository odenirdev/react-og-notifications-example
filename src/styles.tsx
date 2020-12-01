import styled, { createGlobalStyle } from 'styled-components'

const Index = createGlobalStyle`
  :root {
    --bg-color: #f6f6f6;
    --primary-color: #191919;
    --secundary-color: #fafafa;
    --title-font: Roboto;
    --content-font: Nunito;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: var(--content-font);
    background-color: var(--bg-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--primary-color);
    font-family: var(--title-font);
    margin: 1rem 0;
  }

  body {
  font-size: 115%;
  }

  @media (max-width: 990px) {
    body {
      font-size: 90%;
    }
  }

  #root {
    .example {
      display: flex;
      flex-direction: column;

      margin: 1rem auto;

      max-width: 320px;

      button {
        margin-bottom: 1rem;
      }
    }
  }
`

export const Container = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  section {
    margin: 1rem;
  }
`

export default Index
