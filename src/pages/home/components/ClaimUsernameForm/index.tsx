import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from 'phosphor-react'
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUserformFormData = z.infer<typeof claimUsernameFormSchema>
export default function ClaimUsernameform() {
  const { register, handleSubmit } = useForm<ClaimUserformFormData>()

  function handleClaimUsername(data: ClaimUserformFormData) {
    console.log(data)
  }
  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size='sm'
        prefix="ignite.com/"
        placeholder="seu usuario"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}