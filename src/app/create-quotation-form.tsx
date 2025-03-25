'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const environments = [
  'Sala de Estar',
  'Sala de Jantar',
  'Cozinha',
  'Quarto',
  'Banheiro',
  'Escritório',
  'Área Externa',
  'Outro',
]

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const createQuotationFormSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  whatsapp: z.string().regex(phoneRegex, { message: 'Whatsapp inválido' }),
  environments: z.array(z.string()).default([]),
})

type CreateQuotationFormSchema = z.infer<typeof createQuotationFormSchema>

export function CreateQuotationForm() {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  const {
    reset,
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateQuotationFormSchema>({
    resolver: zodResolver(createQuotationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      environments: [],
    },
  })

  async function handleSubmitForm(data: CreateQuotationFormSchema) {
    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setDisplaySuccessMessage(true)
    reset()
  }

  useEffect(() => {
    if (displaySuccessMessage) {
      setTimeout(() => {
        setDisplaySuccessMessage(false)
      }, 5000)
    }
  }, [displaySuccessMessage])

  return displaySuccessMessage ? (
    <div className="w-full pt-0 pb-8 mt-10 px-4 lg:px-8 bg-zinc-950">
      <div className="flex bg-green-950/30 border p-6 lg:p-10 rounded-xl border-green-500 items-center gap-4 flex-col">
        <CheckCircle className="size-[60px] lg:size-[80px] text-green-500" />
        <span className="text-green-500 text-center text-lg lg:text-2xl">
          Orçamento solicitado com sucesso.
        </span>
      </div>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      id="create-quotation-form"
      className="w-full pt-0 pb-8 mt-10 px-4 lg:px-8 bg-zinc-950"
    >
      <div className="flex flex-col max-w-[800px] mx-auto gap-4 items-start">
        <div className="space-y-2 w-full">
          <h2 className="text-2xl lg:text-4xl font-bold text-center">
            Solicite seu orçamento
          </h2>
          <p className="text-sm lg:text-base text-center max-w-[80%] mx-auto text-zinc-300">
            Solicite seu orçamento preenchendo o formulário abaixo.
          </p>
        </div>

        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Input
              value={field.value}
              label="Nome Completo"
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="whatsapp"
          render={({ field, fieldState }) => (
            <Input
              type="tel"
              label="Whatsapp"
              maxLength={15}
              value={field.value}
              onValueChange={val => field.onChange(phoneMask(val))}
              errorMessage={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Input
              label="E-mail"
              value={field.value}
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />

        <div className="flex flex-col items-start gap-2">
          <span>Ambientes</span>

          <div className="flex items-center gap-4 flex-wrap">
            {environments.map(env => {
              const isChecked = watch('environments').includes(env)

              return (
                <label htmlFor="" key={env} className="flex items-center gap-2">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => {
                      if (isChecked) {
                        setValue(
                          'environments',
                          watch('environments').filter(e => e !== env)
                        )
                      } else {
                        setValue('environments', [
                          ...watch('environments'),
                          env,
                        ])
                      }
                    }}
                  />
                  <span>{env}</span>
                </label>
              )
            })}
          </div>
        </div>

        <Button disabled={isSubmitting} className="mt-4">
          Solicitar
        </Button>
      </div>
    </form>
  )
}
