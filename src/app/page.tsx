import { ArrowRight, Copy, Mail } from 'lucide-react'
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { InputField, InputIcon, InputRoot } from './components/input';

export default function Home() {
  return (
    <main>
      <div>
        <Button type='submit'>
          Enviar
          <ArrowRight />
        </Button>
        <IconButton>
          <Copy />
        </IconButton>
        <div>
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField placeholder='Digite seu email' />
          </InputRoot>
        </div>
      </div>
    </main>
  );
}
