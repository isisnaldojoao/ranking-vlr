import Link from 'next/link';

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <header className="w-full p-5 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold">VCT Teams Nerdola´s Rankings</h1>
        <h3>Versão 0.0</h3>
        <Link 
            className="w-1/4 bg-white text-black p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
            href={"/"}>
            Hom
        </Link>
    </header>
      <main className="grid grid-cols-2 gap-8 row-start-2 items-center sm:items-start">
       <h1>Ranking4</h1>
        
      </main>
      
    </div>
  );
}
