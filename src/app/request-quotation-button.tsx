'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

interface RequestQuotationButtonProps {
  variant?: 'primary' | 'secondary'
}

export function RequestQuotationButton({
  variant = 'primary',
}: RequestQuotationButtonProps) {
  function scrollToForm() {
    document
      ?.getElementById('create-quotation-form')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return variant === 'primary' ? (
    <Button
      onClick={scrollToForm}
      className="px-2 lg:px-4 text-sm lg:text-base whitespace-nowrap"
    >
      Solicitar orçamento
    </Button>
  ) : (
    <button
      type="button"
      onClick={scrollToForm}
      className="flex cursor-pointer group mt-auto items-center gap-1 text-orange-400"
    >
      <span className="text-xs lg:text-sm font-semibold whitespace-nowrap">
        Solicitar orçamento
      </span>
      <ChevronRight className="size-4 lg:size-5 group-hover:ml-1 lg:group-hover:ml-2 duration-300" />
    </button>
  )
}
