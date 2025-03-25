import { About } from './about'
import { CreateQuotationForm } from './create-quotation-form'
import { Feedback } from './feedback'
import { Footer } from './footer'
import { Hero } from './hero'
import { WhatsappButton } from './whatsapp-button'

export default function Page() {
  return (
    <main className="w-full relative">
      <Hero />
      <About />
      <Feedback />
      <CreateQuotationForm />
      <Footer />
      <WhatsappButton />
    </main>
  )
}
