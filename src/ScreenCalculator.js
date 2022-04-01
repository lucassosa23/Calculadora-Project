import React, {useState} from 'react'


export const ScreenCalculator = () => {
        
    const [numer1, setNumer1] = useState("")
    const [number2, setNumber2] = useState("")
    const [currentOperation, setCurrentOperation] = useState("")
    const [result, setResult] = useState(0)
   
    const clickNumber = (val) => {
  
      if (currentOperation === "") {
        setNumer1(numer1 + val);
      }else {
        setNumber2(number2 + val);
      }
        
    }
  
    const clickOperation = (val) => {
        setCurrentOperation(val);
    }
  
    const resultCalculator = (val) => {
        
        switch (currentOperation) {
          case "+":
            setResult(Number(numer1) + Number(number2))
            break;
            case "-":
              setResult(Number(numer1) - Number(number2))
              break;
              case "%":
                setResult(Number(numer1) / Number(number2))
                break;
                case "x":
                  setResult(Number(numer1) * Number(number2))
                  break;
                  default:
      
           
        }
    }
   
  
    const Buttonclear = () => {
      setNumer1("")
      setNumber2("")
      setCurrentOperation("")
      setResult("")
    }



  return ( 

    <div className='app' >
      <h1 className='title'>
        FIERA Calculadora
        <hr></hr>
      </h1>
      <div className='calculator-grid'>
        <div className='output'>
            <div className='prev-operation'> { currentOperation ? numer1 + currentOperation : "" }</div>
            <div className='result-cal'> { result ? result : (!currentOperation ? numer1 : number2) }</div>
          </div>

          <button onClick={Buttonclear} className='button-dif'>C</button>
          <button onClick= {() => {clickOperation("%")}}className='but-dif'>%</button>
          <button onClick={() => {clickNumber(7)}}>7</button>
          <button onClick={() => {clickNumber(8)}}>8</button>
          <button onClick={() => {clickNumber(9)}}>9</button>
          <button onClick={() => {clickOperation("x")}} className='but-dif'>X</button>
          <button onClick={() => {clickNumber(4)}}>4</button>
          <button onClick={() => {clickNumber(5)}}>5</button>
          <button onClick={() => {clickNumber(6)}}>6</button>
          <button onClick={() => {clickOperation("-")}} className='but-dif'>-</button>
          <button onClick={() => {clickNumber(1)}}>1</button>
          <button onClick={() => {clickNumber(2)}}>2</button>
          <button onClick={() => {clickNumber(3)}}>3</button>
          <button onClick={() => {clickOperation("+")}} className='but-dif'>+</button>
          <button onClick={() => {clickNumber(0)}} className='button-dif' >0</button>
          <button onClick={resultCalculator} className='but-dif'>=</button>
          

          </div>
          </div>  
      
  );
    
}