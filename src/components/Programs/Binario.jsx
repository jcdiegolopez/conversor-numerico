import {useState} from 'react';


const toBinary = (decimal) =>{
    let binary =""
    
    while(decimal>0 ){
        binary =  (decimal % 2).toString() + binary  ;
        decimal = Math.floor(decimal/2);
    }
    binary = (binary.length< 8) ? binary.padStart(8, "0") : binary;
    return binary;
}
const reverseString = (str) => {
    return str.split("").reverse().join("");
  }

const toDecimal = (binary) =>{
    let decimal = 0;
    let binaryReverse = reverseString(binary);
    binaryReverse.split("").forEach((bit,index) => decimal += bit*(2**index));
    return decimal;

}



const Binario= () => {
    const [values, setValues] = useState({
        decimal: {value: 0, selected: false},
        binario: {value:"00000000", selected: false}
    });

    const handleClick = (e) => {
        
        setValues(p =>{
            const newSelected = {...p}
            if(e.target.name === 'binario'){
                newSelected.binario.selected = true;
                newSelected.decimal.selected = false;
            }else{
                newSelected.binario.selected = false;
                newSelected.decimal.selected = true;      
            }
            return newSelected;
        }
            
        )
        
    }

    const handleChange = (e) =>{
        setValues(p =>{return {...p, [e.target.name]:{...p[e.target.name],value:e.target.value}}}
            
        );
        if(values.decimal.selected){
            setValues(p =>{
                return {...p, ['binario']:{...p['binario'],value:toBinary(p.decimal.value)}}
            }
            );
        }else if(values.binario.selected){
            setValues(p =>{
                return {...p, ['decimal']:{...p['decimal'],value:toDecimal(p.binario.value)}}
            }
            );
        }
    } 


    return(
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6">Decimal a Binario</h2>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="name"
                >Decimal</label>
            <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="number"
                name = "decimal"
                value = {values.decimal.value}
                onClick={handleClick}
                onChange={handleChange}
                
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="email"
                >Binario</label>
            <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="binario"
                id="binario"
                type="text"
                value = {values.binario.value}
                onClick={handleClick}
                onChange={handleChange}
                
            />
            </div>

    
        </div>
    );
}

export default Binario;