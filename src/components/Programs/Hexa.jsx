import {useState} from 'react';

const dictHexa = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "A": 10,
    "B": 11,
    "C": 12,
    "D": 13,
    "E": 14,
    "F": 15,
  }

 const getHexKeyByValue = (value) => {
    for (const key in dictHexa) {
      if (dictHexa[key] === value) {
        return key;
      }
    }
    return undefined;
  }
  
const toHexa = (decimal) => {
    let hexa =""
    
    while(decimal>0 ){
        hexa =  getHexKeyByValue(decimal % 16) + hexa  ;
        decimal = Math.floor(decimal/16);
    }
    return hexa;
}

const reverseString = (str) => {
    return str.split("").reverse().join("");
  }

const toDecimal = (hexa) => {
    let decimal = 0;
    reverseString(hexa).split("").forEach((i,index) => decimal += dictHexa[i]*(16**index));
    return decimal;
    
}


const Hexa = () => {
    const [values, setValues] = useState({
        hexa: {value: "5DC", selected: false},
        decimal: {value:1500, selected: false}
    });

    const handleClick = (e) => {
        
        setValues(p =>{
            const newSelected = {...p}
            if(e.target.name === 'hexa'){
                newSelected.hexa.selected = true;
                newSelected.decimal.selected = false;
            }else{
                newSelected.hexa.selected = false;
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
                return {...p, ['hexa']:{...p['hexa'],value:toHexa(p.decimal.value)}}
            }
            );
        }else if(values.hexa.selected){
            setValues(p =>{
                return {...p, ['decimal']:{...p['decimal'],value:toDecimal(p.hexa.value)}}
            }
            );
        }
    } 


    return(
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6">Hexadecimal a Decimal</h2>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="name"
                >Hexadecimal</label>
            <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                name = "hexa"
                value = {values.hexa.value}
                onClick={handleClick}
                onChange={handleChange}
              
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="email"
                >Decimal</label>
            <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="decimal"
                id="decimal"
                type="text"
                value = {values.decimal.value}
                onClick={handleClick}
                onChange={handleChange}
               
            />
            </div>

    
        </div>
    );
}

export default Hexa;