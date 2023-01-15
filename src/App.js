        import React from 'react'
        import { toast, ToastContainer } from 'react-toastify'
        import './App.css'
        import {BsClipboard} from 'react-icons/bs'
      import { useState } from 'react'
      import {
      numbers,
      upperCaseLetters,
      lowerCaseLetters,
      specialCharacters,
    } from './Characters'
        function App() {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(20)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
        
          const handleGeneratePassword = (e) => {
            
            let characterList =''
      if (includeLowercase) {
          characterList = characterList + lowerCaseLetters
        }
      if (includeUppercase) {
          characterList = characterList + upperCaseLetters
        }
      if (includeNumbers) {
          characterList = characterList + numbers
        }
      if (includeSymbols) {
          characterList = characterList + specialCharacters
        }
          setPassword(createPassword(characterList))
      }
        const createPassword = (characterList) => {
      let password = ''
      const characterListLength = characterList.length

      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random() * characterListLength)
        password = password + characterList.charAt(characterIndex)
      }
      return password
    }
    const copyToClipboard = () => {
      const newTextArea = document.createElement('textarea')
      newTextArea.innerText = password
      document.body.appendChild(newTextArea)
      newTextArea.select()
      document.execCommand('copy')
      newTextArea.remove()
    }
      const handleCopyPassword = (e) => {
        copyToClipboard()}
          return (
          <div className= 'bg-[#3b3b98] h-[700px] relative'>
        <div className='container'>
          < div className='generator'>
            <h2 className='generator__header'>Password Generator</h2>
            <div className='generator__password'>
              <h3>{password}</h3><button onClick={handleCopyPassword} className='copy__btn'><BsClipboard/></button></div>
                    
                      <div>
                        <div className='form-group'>
                          <label className='pr-16'>Password length</label>
                          <input className=' border rounded  w-[50px] text-gray-700 leading-tight focus:outline-none ' defaultValue={passwordLength} 
                          onChange={(e) =>setPasswordLength(e.target.value)} type='number' max='20'min='10' id='password-strength' 
                          name='password-strength'></input>
                          </div>
                          <div className='form-group'>
                            <label >Include Uppercase Letters</label>
                            <input checked={includeUppercase} 
                            onChange={(e) => setIncludeUppercase(e.target.checked)}type='checkbox' id='uppercase-letters'
                name='uppercase-letters'/>
                          </div>
                          <div className='form-group'>
                            <label >Include Lowercase Letters</label>
                            <input checked={includeLowercase}
                            onChange={(e) => setIncludeLowercase(e.target.checked)} type='checkbox' id='lowercase-letters'
                name='lowercase-letters'/>
                          </div>
                          <div className='form-group'>
                          <label >Include Numbers</label>
                          <input checked={includeNumbers}
                          onChange={(e) => setIncludeNumbers(e.target.checked)} type='checkbox' id ='Include Numbers'/>
                        </div>
                        <div className='form-group'>
                          <label >Include Symbols</label>
                          <input checked={includeSymbols} 
                          onChange={(e) => setIncludeSymbols(e.target.checked)}type='checkbox' id ='Include Symbols '/>
                        </div>
                        <button  onClick={handleGeneratePassword}className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate Password </button>
                          
                        
                      </div>
                    </div>
                    </div>
                    </div>
                    
          )
        }

        export default App