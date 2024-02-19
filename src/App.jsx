import { useState } from 'react'
import SelectionBox from './components/SelectionBox';
import C2 from './components/Programs/C2';
import Binario from './components/Programs/Binario';
import Hexa from './components/Programs/Hexa';
import './app.css'


const InitialOptions = [
  {
    name: "BINARIO",
    selected : false,
    componenet: <Binario/>
  },
  {
    name: "COMPLEMENTO A 2",
    selected : true,
    componenet: <C2/>
  },
  {
    name: "HEXADECIMAL",
    selected : false,
    componenet: <Hexa/>
  },
]

function App() {
  const[options, setOption] = useState(InitialOptions);

  const handleChangeOption = (name) =>{
    const newOptions = options.map((option) => option.name===name?({...option, selected: true}):{...option, selected: false});
    setOption(newOptions);
  }

  return (
    <div className="container flex justify-center items-center bg-slate-200 relative min-w-full min-h-screen overflow-hidden text-left text-[1rem] text-blanco font-kode">
      <div className='container2 flex flex-col items-center bg-slate-300 w-[50vw] min-h-[80vh] rounded-lg p-[2rem] shadow-xl'>
        <h1 className="font-black text-[2rem] ">CALCULADORA NUMÉRICA</h1>
        <SelectionBox options={options} handleChangeOption={handleChangeOption}/>
        <div className='p-[2rem]'>
        {options.map((option) => (option.selected && option.componenet) )}
        </div>
        
      </div>
    </div>
  )
}

export default App
