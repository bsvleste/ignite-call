import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import { Header, RegisterContainer } from '../styles'
import { AuthError, ConnectBox, ConnectionItem } from './styles'

export default function ConnectCalendar() {
  /*   async function handleRegister() { } */
  const session = useSession()
  const router = useRouter()
  async function handleConnectCalendar() {
    await signIn('google')
  }
  async function handleNavigationNextStep() {
    await router.push('/register/time-intervals')
  }
  const isSignedIn = session.status === 'authenticated'
  const hasAuthError = !!router.query.error
  return (
    <>
      <NextSeo
        title="Conecte sua agenda do Google | iginite call"
        description=" Conecte o seu calendário para verificar automaticamente as horas
        ocupadas e os novos eventos à medida em que são agendados."
        noindex
      />
      <RegisterContainer>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>
        <ConnectBox>
          <ConnectionItem>
            <Text>Google Calendar</Text>
            {isSignedIn ? (
              <Button disabled size="sm">
                Conectado <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleConnectCalendar}
              >
                Conectar
                <ArrowRight />
              </Button>
            )}
          </ConnectionItem>
          {hasAuthError && (
            <AuthError>
              Falha ao conectar ao Google, verifique se voçê habilitou as
              permisões de acesso ao Google Calendar
            </AuthError>
          )}
          <Button
            onClick={handleNavigationNextStep}
            type="submit"
            disabled={!isSignedIn}
          >
            Próximo Passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </RegisterContainer>
    </>
  )
}
