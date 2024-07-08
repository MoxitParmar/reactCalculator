import { useState , useEffect} from "react";
import Screen from "./Screen";
import back from './backspace.svg'



const Hero = () => {
  const [num, setNum] = useState('');
  const [operator, setOperator] = useState('');
  const [num2, setNum2] = useState('');
  let addnum = (e) => { 
    setNum(num + e.target.innerText);
  }

  let oprator = (e) => {
    setOperator(e.target.innerText);
    setNum2(num);
    setNum('');
  }

  let removenum = (e) => {
    setNum(num.slice(0, -1));
  }

  let [calc, setCalc] = useState(false);
  let calculate = () => {
    setCalc((prev) => !prev);
  }

  

  useEffect(() => {
    if (operator === '+') {
      setNum((parseFloat(num2) + parseFloat(num)).toFixed(3));
      setNum2('');
    } else if (operator === '-') {
      setNum((parseFloat(num2) - parseFloat(num)).toFixed(3));
      setNum2('');
    } else if (operator === 'X') {
      setNum((parseFloat(num2) * parseFloat(num)).toFixed(3));
      setNum2('');
    } else if (operator === '%') {
      setNum((parseFloat(num2) % parseFloat(num)).toFixed(3));
      setNum2('');
    } else if (operator === '÷') {
      setNum((parseFloat(num2) / parseFloat(num)).toFixed(3));
      setNum2('');
    }

  }, [calc])

  
  return (
    <div className="flex flex-col  relative sm:h-[60vh] sm:w-[25vw]  border-4 border-zinc-300 rounded-3xl">
      <Screen screen={num} />
      <div className="h-[100%] w-[100%] grid grid-cols-4 grid-rows-5 place-items-center p-4 gap-2">
      <button className=" btn btn-circle  btn-active btn-outline btn-ghost text-2xl w-14 h-14 "  onClick={oprator}>%</button>
        <button className=" btn btn-circle  btn-active btn-outline btn-ghost text-2xl w-14 h-14 " onClick={oprator}>X</button>
        <button className=" btn btn-circle  btn-active btn-outline btn-ghost text-3xl w-14 h-14 pb-2 " onClick={oprator}>÷</button>
        <button className=" btn btn-circle  btn-active btn-outline btn-ghost text-2xl w-14 h-14 " onClick={removenum}><img src={back} alt="backspace" height={20} width={30} /></button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>1</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>2</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>3</button>
        
        <button className=" btn btn-circle  btn-active btn-outline btn-ghost text-4xl pb-3 w-14 h-14 " onClick={oprator}> - </button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>4</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>5</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>6</button>

        <button className=" btn btn-circle  btn-active btn-outline btn-ghost text-3xl pb-2 w-14 h-14 " onClick={oprator}> + </button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>7</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>8</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>9</button>

        <div className="row-span-2">
          <button
            className='btn btn-circle  btn-active btn-outline btn-ghost text-2xl w-14 h-36 ' onClick={calculate}
          > =
          </button>
        </div>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={() => {setNum('') && setNum2('')}}>AC</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl" onClick={addnum}>0</button>
        <button className="btn btn-circle btn-outline  w-14 h-14 text-4xl pb-4" onClick={addnum}>.</button>

      </div>
    </div>
  );
};

export default Hero;
