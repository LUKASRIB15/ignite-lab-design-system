import {Envelope, Lock} from 'phosphor-react'
import {Logo} from './logo'
import {Text} from './components/Text'
import { Heading } from './components/Heading'
import {TextInput} from './components/TextInput'
import {Checkbox} from './components/Checkbox'
import {Button} from './components/Button'

import './styles/global.css'


export function App() {
  return (
    <div className= "h-screen w-screen flex flex-col bg-gray-900 flex items-center justify-center text-gray-50">
      <header className="flex flex-col items-center">
        <Logo/>
        <Heading size="lg" className="mt-4">Ignite Lab</Heading>
        <Text size="lg" className='text-gray-100 mt-1'>Faça login e comece a usar!</Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-[40px]">
          <label htmlFor='email' className="flex flex-col gap-3 mb-3">
            <Text size="md" className="font-semibold text-gray-50">Endereço de email</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input type="email" placeholder="lucasribeiro@example.com"/>
            </TextInput.Root>
          </label>
          <label htmlFor='password' className="flex flex-col gap-3 mb-4">
            <Text size="md" className="font-semibold text-gray-50">Sua senha</Text> 
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input type="password" placeholder='************'/>
            </TextInput.Root>
          </label>
          <label htmlFor='remember' className='flex items-center gap-2'>
            <Checkbox id="remember"/>
            <Text size="sm" className="text-gray-100">Lembrar de mim por 30 dias</Text>
          </label>
          <Button type="submit" className="mt-7">Entrar na plataforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-6">
        <Text asChild size="sm" className="text-gray-100">
          <a href="#" className="underline transition-colors hover:text-gray-50">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm" className="text-gray-100">
          <a href="#" className="underline transiton-colors hover:text-gray-50">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}


