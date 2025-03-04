import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div className="bg-[#0f1923] min-h-screen flex flex-col items-center justify-between">
      <header className="p-5 flex items-center justify-center">
        <Image src="/nerdolalogo.png" width={300} height={200} alt="logo" className='animate-slowbounce'/>
      </header>
      <main className="w-full flex flex-col sm:w-full flex flex-col gap-8 row-start-2 items-center justify-items-center ">

      <Accordion type="single" collapsible className="w-[200px] sm:w-[800px] bg-[#ff4656] rounded-lg text-white">
            <AccordionItem value="item-1" className='flex flex-col text-center items-center'>
              <AccordionTrigger className="flex items-center justify-center w-full text-center">Season 2021</AccordionTrigger>
              <AccordionContent>
                <div className="w-[150px] flex flex-col  items-center "> {/* Centraliza os botões */}
                  <Link href="/ranking">
                    <div className="bg-white flex text-black mt-2 p-5 w-[250px] items-center justify-center rounded-lg transition-all hover:scale-105">
                      2021/1
                    </div>
                  </Link>

                  <Link href="/ranking2">
                    <div className="bg-white flex text-black mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2021/2
                    </div>
                  </Link>

                  <Link href="/ranking3">
                    <div className="bg-yellow-500 flex text-white mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2021/3
                    </div>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible className="w-[200px] sm:w-[800px] text-white bg-[#ff4656] rounded-lg">
            <AccordionItem value="item-1" className='flex flex-col text-center items-center'>
              <AccordionTrigger className="flex items-center justify-center w-full text-center">Season 2022</AccordionTrigger>
              <AccordionContent>
                <div className="w-[150px] flex flex-col items-center"> {/* Centraliza os botões */}
                <Link href="/ranking4">
                  <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                    2022/1
                  </div>
                </Link>

                <Link href="/ranking5">
                  <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                    2022/2
                  </div>
                </Link>

                <Link href="/ranking6">
                  <div className="bg-yellow-500 flex text-white mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                    2022/3
                  </div>
                </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible className="w-[200px] sm:w-[800px] text-white bg-[#ff4656] rounded-lg">
            <AccordionItem value="item-1" className='flex flex-col text-center items-center'>
              <AccordionTrigger className="flex items-center justify-center w-full text-center">Season 2023</AccordionTrigger>
              <AccordionContent>
                <div className="w-[150px] flex flex-col items-center"> {/* Centraliza os botões */}
                <Link href="/ranking7">
                    <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2023/0
                    </div>
                  </Link>

                  <Link href="/ranking8">
                    <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2023/1
                    </div>
                  </Link>

                  <Link href="/ranking9">
                    <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2023/2
                    </div>
                  </Link>

                  <Link href="/ranking10">
                    <div className="bg-white flex text-black mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2023/3
                    </div>
                  </Link>

                  <Link href="/ranking11">
                    <div className="bg-yellow-500 flex text-white mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2023/4
                    </div>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          
          <Accordion type="single" collapsible className="w-[200px] sm:w-[800px] text-white bg-[#ff4656] rounded-lg">
            <AccordionItem value="item-1" className='flex flex-col text-center items-center'>
              <AccordionTrigger className="flex items-center justify-center w-full text-center ">Season 2024</AccordionTrigger>
              <AccordionContent>
                <div className="w-[150px] flex flex-col items-center"> {/* Centraliza os botões */}
                <Link href="/ranking12">
                    <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/0
                    </div>
                  </Link>

                  <Link href="/ranking13">
                    <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/1
                    </div>
                  </Link>

                  <Link href="/ranking14">
                    <div className="bg-white text-black mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/2
                    </div>
                  </Link>

                  <Link href="/ranking15">
                    <div className="bg-white text-black flex mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/3
                    </div>
                  </Link>

                  <Link href="/ranking16">
                    <div className="bg-white text-black flex mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/4
                    </div>
                  </Link>

                  <Link href="/ranking17">
                    <div className="bg-white text-black flex mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/5
                    </div>
                  </Link>

                  <Link href="/ranking18">
                    <div className="bg-yellow-500 flex text-white mt-2 p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2024/6
                    </div>
                  </Link>

                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible className="w-[200px] sm:w-[800px] text-white bg-[#ff4656]  rounded-lg">
            <AccordionItem value="item-1" className='flex flex-col text-center items-center'>
              <AccordionTrigger className="flex items-center justify-center w-full text-center">Season 2025</AccordionTrigger>
              <AccordionContent>
                <div className="w-[150px] flex flex-col items-center"> {/* Centraliza os botões */}
                <Link href="/ranking19">
                    <div className="bg-white text-black  mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2025/0
                    </div>
                  </Link>

                  <Link href="/ranking20">
                    <div className="bg-white text-black  mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2025/1
                    </div>
                  </Link>

                  <Link href="/ranking21">
                    <div className="bg-white text-black  mt-2 flex text-black p-5 w-[250px]  items-center justify-center rounded-lg transition-all hover:scale-105">
                      2025/2
                    </div>
                  </Link>

                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

      </main>
        <Image src="/torreta.png" width={100} height={100} alt="logo" className='mt-5 animate-pulse'/>
        <Footer/>
    </div>
    
  );
}
