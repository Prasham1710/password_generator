  import React from 'react'
  import {BsClipboard} from 'react-icons/bs'
import { useState } from 'react'
  function App () {
    const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

    return (
      <div>
          <div >
            <h2 className='text-3xl' >Password Generator</h2>
            <div> <div><input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Height "
              type="text,number"
              placeholder="Password"
              value={password}></input><button><BsClipboard/></button></div>
              
                <div>
                  <form><div>
                    <label className='pr-16'>Password length</label>
                    
                    <input className=' border rounded  w-[50px] text-gray-700 leading-tight focus:outline-none ' defaultValue={passwordLength} 
                    onChange={(e) =>setPasswordLength(e.target.value)} type='number' max='20'min='10' id='password-strength' 
                    name='password-strength'></input>
                    </div>
                    <div>
                      <label >Include Uppercase Letters</label>
                      <input checked={includeUppercase} 
                      onChange={(e) => setIncludeUppercase(e.target.checked)}type='checkbox' id ='upeercase-letters'/>
                    </div>
                    <div>
                      <label >Include Lowercase Letters</label>
                      <input checked={includeLowercase}
                      onChange={(e) => setIncludeLowercase(e.target.checked)} type='checkbox' id ='lowerrcase-letters'/>
                    </div>
                     <div>
                    <label >Include Numbers</label>
                    <input checked={includeNumbers}
                     onChange={(e) => setIncludeNumbers(e.target.checked)} type='checkbox' id ='Include Numbers'/>
                  </div>
                   <div>
                    <label >Include Symbols</label>
                    <input checked={includeSymbols} 
                    onChange={(e) => setIncludeSymbols(e.target.checked)}type='checkbox' id ='Include Symbols '/>
                  </div>
                  <button  className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate Password </button>
                    </form>
                  
                </div>
              </div>
              </div>
              </div>
    )
  }

  export default App