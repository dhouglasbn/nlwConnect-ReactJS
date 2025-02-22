'use client'
// Isso já indica que esse componente vai ser client component

import { Copy, Link } from 'lucide-react'
import { IconButton } from '../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../components/input'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

/**
 * No nextJS a renderização de componentes é server side rendering
 * o NextJS entende todos esses componentes como server components
 * então tudo vai ser enviado como html para o navegador sem javascript
 * porque javascript é muito pesado e em grandes aplicações o spa fica lento
 *
 * Quando precisarmos de interação precisaremos indicar que aquele componente
 * é um client component e ele vai ser enviado com javascript para o navegador
 */
