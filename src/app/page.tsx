import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <div className="bg-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="p-5 flex items-center justify-center">
        <h1 className="text-xl font-bold text-white">VCT Teams Nerdola´s Rankings</h1>
        <Image src="/champions.png" width={100} height={100} alt="logo" className='animate-slowbounce'/>
      </header>
      <main className="w-full flex flex-col sm:flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <Accordion type="single" collapsible className="w-full bg-white rounded-lg">
            <AccordionItem value="item-1" className='flex flex-col text-center'>
              <AccordionTrigger className="flex items-center justify-center w-full text-center">Season 2021</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-center"> {/* Centraliza os botões */}
                  <Link href="/ranking">
                    <div className="bg-black flex text-white mt-2 p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
                      2021/1
                    </div>
                  </Link>

                  <Link href="/ranking2">
                    <div className="bg-black flex text-white mt-2 p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
                      2021/2
                    </div>
                  </Link>

                  <Link href="/ranking3">
                    <div className="bg-yellow-500 flex text-white p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
                      2021/3
                    </div>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


       
        <Link href="/ranking4">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/1
          </div>
        </Link>

        <Link href="/ranking5">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/2
          </div>
        </Link>

        <Link href="/ranking6">
          <div className="bg-yellow-500 flex text-white p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/3
          </div>
        </Link>

        <Link href="/ranking7">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2023/0
          </div>
        </Link>

        <Link href="/ranking8">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2023/1
          </div>
        </Link>

        <Link href="/ranking9">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2023/2
          </div>
        </Link>

        <Link href="/ranking10">
          <div className="bg-yellow-500 flex text-white p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2023/3
          </div>
        </Link>



      </main>
        <Image src="/torreta.png" width={100} height={100} alt="logo" className='mt-5 animate-pulse'/>
    </div>
  );
}
