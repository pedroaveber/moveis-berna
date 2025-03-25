import Image from 'next/image'
import logoTransparentPng from '@/assets/img/logo-transparent.png'
import { RequestQuotationButton } from './request-quotation-button'

export function Hero() {
  return (
    <section className='w-full flex flex-col items-start justify-between pb-40 h-[70vh] lg:h-screen relative bg-cover bg-[url("/img/saw.jpg")] bg-center bg-no-repeat'>
      {/* Header */}
      <div className="flex py-4 max-w-[1300px] mx-auto lg:py-0 bg-gradient-to-b from-zinc-950 to-transparent items-center justify-between w-full">
        <Image
          src={logoTransparentPng}
          className="object-cover w-[200px] h-[50px] lg:h-[100px] lg:w-[400px]"
          alt="Logo"
          quality={100}
        />

        <nav className="flex items-center pr-4 lg:pr-8 justify-end gap-4">
          <RequestQuotationButton />
        </nav>
      </div>

      <div className="px-4 max-w-[1300px] mx-auto lg:px-8 z-20 flex items-center justify-between w-full">
        <div className="space-y-1">
          <h2 className="text-sm lg:text-2xl font-semibold">
            Há mais de 4 décadas entregando
          </h2>
          <h2 className="text-2xl whitespace-nowrap lg:text-6xl font-bold text-orange-400">
            Excelência em marcenaria.
          </h2>
        </div>

        {/* <div className="flex items-center gap-4 justify-between">
        <button
          type="button"
          className="size-10 cursor-pointer flex items-center justify-center text-white hover:bg-white/15 rounded-full bg-white/20 backdrop-blur"
        >
          <ChevronLeft className="mr-1" size={32} />
        </button>

        <button
          type="button"
          className="size-10 cursor-pointer flex items-center justify-center text-white hover:bg-white/15 rounded-full bg-white/20 backdrop-blur"
        >
          <ChevronRight className="ml-1" size={32} />
        </button>
      </div> */}
      </div>

      <div className="bg-gradient-to-b from-transparent to-zinc-950 h-[50vh] via-70% via-zinc-900 absolute z-10 bottom-0 left-0 right-0" />
    </section>
  )
}
