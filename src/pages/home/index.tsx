import { Heading, Text } from '@ignite-ui/react'
import { Hero, HomeContainer, Preview } from './styles'
import Image from 'next/image'
import previewImage from './../../assets/apppreview.png'

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Heading size={'4xl'}> Agendamento descomplicado</Heading>
        <Text size={'xl'}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          alt="calendario de agendamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </HomeContainer>
  )
}
