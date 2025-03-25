import { NextResponse } from 'next/server'

type RequestBody = {
  name: string
  email: string
  whatsapp: string
  environments: string[]
}

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody

  // send e-mail here
  console.log(body)

  return new NextResponse()
}
