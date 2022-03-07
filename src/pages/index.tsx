import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState
  
  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        p="8"
        w="100%"
        as="form"
        bg="gray.800"
        maxWidth={360}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            { ...register('email') }
          />

          <Input
            label="Senha" 
            name="password"
            type="password"
            error={errors.password}
            { ...register('password') }
          />
        </Stack>
        <Button
          mt="6"
          size="lg"
          type="submit"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
