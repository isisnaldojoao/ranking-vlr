
export default function Legend() {


  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center m-5">
      
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-purple-400 rounded-lg"></div>
        <p>1º Masters/Lockin</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-purple-700 rounded-lg"></div>
        <p>2º Masters</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-yellow-500 rounded-lg"></div>
        <p>Champions</p>
      </div>
    </div>
  );
}
