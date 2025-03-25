import logoTransparentPng from '@/assets/img/logo-transparent.png'
import { Facebook, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full mt-10 bg-zinc-800 border-t border-zinc-700 px-4 lg:px-6 py-8">
      <div className="flex flex-col items-start w-full max-w-[1300px] mx-auto">
        <div className="flex w-full items-center justify-between">
          <Image
            width={500}
            height={500}
            src={logoTransparentPng}
            alt=""
            className="object-cover -ml-4 w-[180px] h-[50px] lg:h-[80px] lg:w-[300px]"
          />

          <div className="flex items-center justify-end gap-2">
            <Link href="https://www.instagram.com/moveisberna?igsh=MTVhNHNod2tveDhvcA%3D%3D&utm_source=qr">
              <Instagram className="size-5 lg:size-6 hover:text-orange-400" />
            </Link>

            <Link href="https://www.facebook.com/bernamoveisdequalidade/?locale=pt_BR">
              <Facebook className="size-5 lg:size-6 hover:text-orange-400" />
            </Link>

            <Mail className="size-5 lg:size-6 hover:text-orange-400" />
          </div>
        </div>

        <div className="flex items-center w-full justify-center pt-4 border-t border-zinc-700 text-zinc-500">
          <small className="text-sm">
            &copy; Moveis Berna - Todos os direitos reservados.
          </small>
        </div>
      </div>
    </footer>
  )
}
