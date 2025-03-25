'use client'

import whatsappLogoPng from '@/assets/img/whatsapp.png'
import Image from 'next/image'

export function WhatsappButton() {
  function openWhatsapp() {
    window.open(
      'https://wa.me/5554999189996?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.',
      '_blank'
    )
  }

  return (
    <button
      onClick={openWhatsapp}
      type="button"
      className="fixed z-50 bottom-6 right-6 size-[60px] hover:scale-110 duration-300 cursor-pointer"
    >
      <Image
        src={whatsappLogoPng}
        width={60}
        height={60}
        quality={100}
        alt=""
      />
    </button>
  )
}
