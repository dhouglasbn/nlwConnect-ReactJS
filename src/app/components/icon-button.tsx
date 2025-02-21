import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  // Quando eu passo um className no IconButton e passo outra className no button aqui dentro
  // quando className vem no {...props} ele substitui as declarações anteriores
  // o twMerge avalia quais classes se repetem, evita redundancia e junta ambos
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
