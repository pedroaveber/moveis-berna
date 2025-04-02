import dayjs from 'dayjs'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type RequestBody = {
  name: string
  email: string
  whatsapp: string
  environments: string[]
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = (await request.json()) as RequestBody

  await resend.emails.send({
    from: 'no-reply@moveisberna.com.br',
    to: 'moveisberna@gmail.com',
    subject: 'Solicitação de Orçamento',
    html: /* html */ `
      <h1>Uma nova solicitação de orçamento chegou através do site!</h1>

      <p><strong>Nome:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Whatsapp:</strong> ${body.whatsapp}</p>

      ${
        body.environments.length > 0 &&
        /* html */ `
            <p>Solicitando orçamento para os ambientes abaixo:</p>

            <ul>
              ${body.environments.map(
                environment =>
                  /* html */ `
                    <li>${environment}</li>
                  `
              )}
            </ul>
          `
      }

      <p>Solicitado em ${dayjs().format('DD/MM/YYYY HH:mm')}</p>
    `,
  })

  return new NextResponse()
}
