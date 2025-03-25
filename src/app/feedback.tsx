import { FeebackCarousel } from './feedback-carousel'

export function Feedback() {
  return (
    <section className="flex w-full mt-10 bg-zinc-950 px-4 lg:px-8 py-8 flex-col gap-10 items-center justify-center">
      <div className="space-y-4 max-w-[1200px] mx-auto w-full">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          O que os clientes dizem
        </h1>

        <p className="text-sm lg:text-base text-center max-w-[80%] mx-auto text-zinc-300">
          Alguns dos feedbacks que recebemos de nossos clientes.
        </p>
      </div>

      <div className="space-y-6 max-w-[1200px] mx-auto w-full">
        <FeebackCarousel />
      </div>
    </section>
  )
}
