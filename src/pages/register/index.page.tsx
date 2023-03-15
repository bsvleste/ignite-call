import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Form, Header, RegisterContainer } from "./styles";

export default function Register() {
  return (
    <RegisterContainer>
      <Header>
        <Heading as="strong">
          Bem-vindo ao Ignite Call!
        </Heading>
        <Text>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</Text>
      </Header>
      <MultiStep size={4} currentStep={1} />
      <Form as="form">
        <label>
          <Text size="sm">Nome de usuario</Text>
          <TextInput prefix="ignite.com/"
            placeholder='seu-usuario'
          />
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput
            placeholder='seu nome completo'
          />
        </label>
        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </Form>
    </RegisterContainer>
  )
}