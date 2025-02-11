import Link from 'next/link';

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="p-5">
        <h1 className="text-xl font-bold">VCT Teams Nerdola´s Rankings</h1>
      </header>
      <main className="flex flex-col sm:grid grid-cols-2 gap-8 row-start-2 items-center sm:items-start">
        <Link href="/ranking">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2021/1
          </div>
        </Link>

        <Link href="/ranking2">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2021/2
          </div>
        </Link>

        <Link href="/ranking3">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
          2022/1
          </div>
        </Link>

        <Link href="/ranking4">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/2
          </div>
        </Link>

        
      </main>
      
    </div>
  );
}
