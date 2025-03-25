'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface CheckboxProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function Checkbox({ checked, onCheckedChange }: CheckboxProps) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      type="button"
      className={cn(
        'size-5 border-[1.5px] border-zinc-500 cursor-pointer rounded-md flex items-center justify-center',
        checked && 'bg-orange-400 border-orange-400'
      )}
    >
      {checked && <Check strokeWidth={3} />}
    </button>
  )
}
