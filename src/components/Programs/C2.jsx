import {useState} from 'react';

const DtoBinary = (decimal) =>{
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

const toBinary = (c2) =>{
    let binary =""
    DtoBinary(toDecimal(c2) - 1 ).split("").forEach((bit) => binary += (bit==="0"? "1" : "0"));
    return binary;
}


const toC2 = (binary) =>{
    let c2 = "";
    binary.split("").forEach((bit) => c2 += (bit==="0"? "1" : "0"));
    return DtoBinary( toDecimal(c2)+1 );

}



const C2 = () => {
    const [values, setValues] = useState({
        binario: {value: "00000001", selected: false},
        c2: {value:"11111111", selected: false}
    });

    const handleClick = (e) => {
        
        setValues(p =>{
            const newSelected = {...p}
            if(e.target.name === 'binario'){
                newSelected.binario.selected = true;
                newSelected.c2.selected = false;
            }else{
                newSelected.binario.selected = false;
                newSelected.c2.selected = true;      
            }
            return newSelected;
        }
            
        )
        
    }

    const handleChange = (e) =>{
        setValues(p =>{return {...p, [e.target.name]:{...p[e.target.name],value:e.target.value}}}
            
        );
        if(values.c2.selected){
            setValues(p =>{
                return {...p, ['binario']:{...p['binario'],value:toBinary(p.c2.value)}}
            }
            );
        }else if(values.binario.selected){
            setValues(p =>{
                return {...p, ['c2']:{...p['c2'],value:toC2(p.binario.value)}}
            }
            );
        }
    } 


    return(
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6">Binario a Complemento 2</h2>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="name"
                >Binario</label>
            <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                name = "binario"
                value = {values.binario.value}
                onClick={handleClick}
                onChange={handleChange}
                readOnly={!values.binario.selected}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="email"
                >Complemento 2</label>
            <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="c2"
                id="c2"
                type="text"
                value = {values.c2.value}
                onClick={handleClick}
                onChange={handleChange}
                readOnly={!values.c2.selected}
            />
            </div>

    
        </div>
    );
}

export default C2;