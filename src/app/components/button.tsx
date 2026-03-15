import { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean
}

export function Button({ loading, children, disabled, ...props }: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center gap-2 px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}

      {children}
    </button>
  )
}
