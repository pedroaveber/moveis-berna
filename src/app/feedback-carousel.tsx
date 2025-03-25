'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import dayjs from 'dayjs'
import { Star } from 'lucide-react'

const animation = { duration: 30000, easing: (t: number) => t }

const feedbacks = [
  {
    name: 'Mariana Silva',
    description:
      'Os móveis ficaram incríveis! Atendimento impecável e qualidade excepcional. Super recomendo!',
    createdAt: new Date('2024-02-15'),
  },
  {
    name: 'Carlos Oliveira',
    description:
      'Serviço de alto nível! Os detalhes e acabamentos são perfeitos. Com certeza voltarei a contratar.',
    createdAt: new Date('2024-03-02'),
  },
  {
    name: 'Ana Souza',
    description:
      'Fiquei impressionada com o capricho e a pontualidade na entrega. Móveis lindos e bem feitos!',
    createdAt: new Date('2024-01-28'),
  },
  {
    name: 'Rafael Mendes',
    description:
      'Profissionalismo e qualidade em cada detalhe. Recomendo para quem busca móveis personalizados e duráveis.',
    createdAt: new Date('2024-02-10'),
  },
  {
    name: 'Juliana Costa',
    description:
      'Atendimento excelente e móveis de altíssima qualidade. O resultado superou minhas expectativas!',
    createdAt: new Date('2024-03-05'),
  },
  {
    name: 'Fernando Lima',
    description:
      'Equipe extremamente profissional e atenciosa. O projeto ficou perfeito, exatamente como imaginei!',
    createdAt: new Date('2024-02-22'),
  },
  {
    name: 'Bianca Ferreira',
    description:
      'Desde o primeiro contato até a entrega, tudo foi impecável. Recomendo sem dúvidas!',
    createdAt: new Date('2024-01-18'),
  },
  {
    name: 'Eduardo Martins',
    description:
      'Móveis sob medida com um acabamento impecável! Ficamos muito satisfeitos com o resultado.',
    createdAt: new Date('2024-02-08'),
  },
  {
    name: 'Tatiane Rocha',
    description:
      'Atendimento cordial e produtos de qualidade. Os móveis deixaram minha casa ainda mais bonita!',
    createdAt: new Date('2024-03-12'),
  },
  {
    name: 'Gabriel Santos',
    description:
      'Excelente trabalho! Materiais de primeira e execução impecável. Entrega no prazo, sem surpresas.',
    createdAt: new Date('2024-03-01'),
  },
]

export function FeebackCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
    breakpoints: {
      '(min-width: 300px)': {
        slides: {
          perView: 1.5,
          spacing: 16,
        },
      },
      '(min-width: 600px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      '(min-width: 800px)': {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
    },
    created: s => {
      s.moveToIdx(5, true, animation)
    },
    updated: s => {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded: s => {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <div className="absolute top-0 left-0 bottom-0 z-10 w-[100px] bg-gradient-to-r from-zinc-950 to-transparent" />
      {feedbacks.map(each => (
        <div
          key={each.name}
          className="keen-slider__slide h-[230px] lg:h-[250px] border bg-zinc-800 border-zinc-700 p-6 rounded-xl flex flex-col items-start gap-4"
        >
          <div className="space-y-2">
            <h4 className="font-semibold leading-0 text-lg">{each.name}</h4>

            <span className="text-xs lg:text-sm font-light text-zinc-400">
              {dayjs(each.createdAt).format('DD/MM/YYYY')}
            </span>
          </div>

          <p className="text-xs line-clamp-5 leading-relaxed lg:text-sm text-zinc-200 font-light">
            {each.description}
          </p>

          <div className="flex items-center mt-auto justify-start gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index.toString()}
                className="size-4 lg:size-6 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-xs font-light text-zinc-400">(5/5)</span>
          </div>
        </div>
      ))}

      <div className="absolute top-0 right-0 bottom-0 z-10 w-[100px] bg-gradient-to-l from-zinc-950 to-transparent" />
    </div>
  )
}
