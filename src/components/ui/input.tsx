'use client'

import { cn } from '@/lib/utils'
import { type ComponentProps, useId, useState } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
  value: string
  errorMessage?: string
  onValueChange: (value: string) => void
}

export function Input({
  label,
  errorMessage,
  onValueChange,
  value,
  type = 'text',
}: InputProps) {
  const id = useId()
  const hasError = !!errorMessage

  const [isFocused, setisFocused] = useState(false)

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <div
        className={cn(
          'h-14 flex px-3 pb-1 rounded-md relative border-zinc-500 border w-full bg-zinc-900',
          hasError && 'border-red-700'
        )}
      >
        <label
          htmlFor={id}
          className={cn(
            'absolute -translate-y-1/2 top-1/2 left-3 duration-300 text-zinc-500 font-light',
            isFocused && 'text-white',
            (isFocused || value) && 'top-4 text-xs font-semibold'
          )}
        >
          {label}
        </label>

        <input
          id={id}
          onFocus={() => setisFocused(true)}
          onBlur={() => setisFocused(false)}
          type={type}
          value={value}
          onChange={e => {
            onValueChange(e.target.value)
          }}
          className={cn('flex-1 outline-0 h-8 mt-auto text-zinc-100')}
        />
      </div>

      {hasError && (
        <span className="text-red-700 text-xs font-light">{errorMessage}</span>
      )}
    </div>
  )
}
