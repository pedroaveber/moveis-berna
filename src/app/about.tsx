import planningJpg from '@/assets/img/planning.jpg'
import woodWorkingJpg from '@/assets/img/woodworking.jpg'
import Image from 'next/image'
import { RequestQuotationButton } from './request-quotation-button'

export function About() {
  return (
    <section className="flex bg-zinc-950 px-4 lg:px-8 flex-col gap-10 items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Nossos Serviços
        </h1>

        <p className="text-sm lg:text-base text-center max-w-[80%] mx-auto text-zinc-300">
          Atualmente trabalhamos com todos os serviços que envolvam marcenaria,
          pondendo ser confecção de novas peças e reformas em clássicos, além de
          contar com sugestões para ambientes planejados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto gap-6 w-full">
        <div className="rounded-xl bg-zinc-800 border h-[120px] lg:h-[200px] border-zinc-700 flex items-start w-full overflow-hidden">
          <div className="flex h-full w-3/5 lg:w-1/2 p-5 lg:p-6 flex-col items-start gap-4">
            <h4 className="text-base lg:text-lg font-semibold text-white">
              Confecção de novas peças
            </h4>

            <p className="text-zinc-300 text-sm font-light hidden lg:block">
              Confecção e planejamento de novas peças.
            </p>

            <RequestQuotationButton variant="secondary" />
          </div>

          <div className="relative w-2/5 h-full lg:w-1/2">
            <div className="bg-gradient-to-r from-zinc-800 to-transparent absolute top-0 left-0 bottom-0 w-20" />
            <Image
              alt=""
              width={500}
              height={500}
              className="w-full object-cover object-center h-full"
              src={planningJpg}
            />
          </div>
        </div>

        <div className="rounded-xl bg-zinc-800 border h-[120px] lg:h-[200px] border-zinc-700 flex items-start w-full overflow-hidden">
          <div className="flex h-full w-3/5 lg:w-1/2 p-5 lg:p-6 flex-col items-start gap-4">
            <h4 className="text-base lg:text-lg font-semibold text-white">
              Reformas em clássicos
            </h4>

            <p className="text-zinc-300 text-sm font-light hidden lg:block">
              Realização de reformas em peças clássicas.
            </p>

            <RequestQuotationButton variant="secondary" />
          </div>

          <div className="relative w-2/5 h-full lg:w-1/2">
            <div className="bg-gradient-to-r from-zinc-800 to-transparent absolute top-0 left-0 bottom-0 w-20" />
            <Image
              alt=""
              width={500}
              height={500}
              className="w-full object-cover object-center h-full"
              src={woodWorkingJpg}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
