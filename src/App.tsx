import React from 'react'
import Highlight from 'react-highlight'
import WebFont from 'webfontloader'

import Button from 'react-og-buttons'
import { Footer } from 'react-og-navbar'
import notification, { Grid as NotificationsGrid } from 'react-og-notifications'

import 'highlight.js/styles/dracula.css'
import GlobalStyle, { Container } from './styles'

import OGLogo from './images/og-light-logo.png'

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'Nunito:300,400,700']
  }
})

const App = () => {
  function defaultNotification() {
    notification(
      'Message notificaction default',
      'default',
      'Notification default'
    )
  }

  function successNotification() {
    notification(
      'Message notificaction success',
      'success',
      'Notification success'
    )
  }

  function warningNotification() {
    notification(
      'Message notificaction warning',
      'warning',
      'Notification warning'
    )
  }

  function infoNotification() {
    notification('Message notificaction info', 'info', 'Notification info')
  }

  function errorNotification() {
    notification('Message notificaction error', 'error', 'Notification error')
  }

  return (
    <>
      <NotificationsGrid />
      <GlobalStyle />
      <Container>
        <header>
          <h1>React OG Notifications</h1>
          <p>Notification lib by OG Developer</p>
        </header>

        <section>
          <h2>Install</h2>
          <Highlight>{`
            import React from 'react'

            import Button from 'react-og-buttons'
            import notification, { Grid as NotificationsGrid } from 'react-og-notifications'

            import GlobalStyle from './styles'

            const App = () => {
              function defaultNotification() {
                notification(
                  'Message notificaction default',
                  'default',
                  'Notification default'
                )
              }

              function successNotification() {
                notification(
                  'Message notificaction success',
                  'success',
                  'Notification success'
                )
              }

              function warningNotification() {
                notification(
                  'Message notificaction warning',
                  'warning',
                  'Notification warning'
                )
              }

              function infoNotification() {
                notification('Message notificaction info', 'info', 'Notification info')
              }

              function errorNotification() {
                notification('Message notificaction error', 'error', 'Notification error')
              }

              return (
                <>
                  <GlobalStyle />
                  <NotificationsGrid />
                  <div>
                    <Button onClick={defaultNotification}>Notification</Button>
                    <Button typeStyle='success' onClick={successNotification}>
                      Success notification
                    </Button>
                    <Button backgroundColor='#40a3b9' onClick={infoNotification}>
                      Info notification
                    </Button>
                    <Button typeStyle='warning' onClick={warningNotification}>
                      Warning notification
                    </Button>
                    <Button typeStyle='danger' onClick={errorNotification}>
                      Error notification
                    </Button>
                  </div>
                </>
              )
            }

            export default App
          `}</Highlight>
        </section>

        <section>
          <div className='example'>
            <Button onClick={defaultNotification}>Notification</Button>
            <Button typeStyle='success' onClick={successNotification}>
              Success notification
            </Button>
            <Button backgroundColor='#40a3b9' onClick={infoNotification}>
              Info notification
            </Button>
            <Button typeStyle='warning' onClick={warningNotification}>
              Warning notification
            </Button>
            <Button typeStyle='danger' onClick={errorNotification}>
              Error notification
            </Button>
          </div>
        </section>
      </Container>
      <Footer
        logo={<img src={OGLogo} width='200px' alt='OG Logo' />}
        links={<></>}
      >
        <p>
          OG Developer - License MIT © [odenirdev](https://github.com/odenirdev)
        </p>
      </Footer>
    </>
  )
}

export default App
