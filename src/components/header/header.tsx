'use client';

import Image from 'next/image';
import Link from 'next/link';

// Definindo os tipos de props que o Footer vai receber
interface FooterProps {
  logoSrc: string;
  links: { href: string; text: string }[];
}

/******  99a6f4fd-83f8-41c5-9101-7b1dcaf090d6  *******/
export default function Header({ logoSrc, links }: FooterProps) {
  return (
    <div>
      <Image src={logoSrc} width={300} height={200} alt="logo" className="animate-slowbounce" />
      
      <div className="flex items-center justify-center gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            className="w-2/4 bg-[#ff4656] text-white p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
