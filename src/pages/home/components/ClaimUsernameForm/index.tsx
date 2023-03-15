import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from 'phosphor-react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = z.object({
  username: z.string()
    .min(3, { message: "O usuario precisa ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, { message: "O usuario pode ter apenas letras e hifens" })
    .transform(username => username.toLocaleLowerCase()),
})

type ClaimUserformFormData = z.infer<typeof claimUsernameFormSchema>
export default function ClaimUsernameform() {
  const { register, handleSubmit, formState: { errors } } = useForm<ClaimUserformFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  function handleClaimUsername(data: ClaimUserformFormData) {
    console.log(data)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size='sm'
          prefix="ignite.com/"
          placeholder="seu usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={errors.username ? true : false}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Digite o nome do usuario desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}