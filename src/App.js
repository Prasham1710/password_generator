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
    import 'react-toastify/dist/ReactToastify.css'
import { COPY_SUCCESS } from './Message'
        function App() {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(20)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
        
          const handleGeneratePassword = (e) => {
            if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify('You must Select atleast one option',true)
    }
            
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
      const notify = (Message,hasError = false )=>{
        if (hasError){
          toast.error(Message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
        } else {
        toast(Message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
        } 
      }
      const handleCopyPassword = (e) => {
        if (password ===''){
          notify('Nothing to Copy',true)
        } else{
          copyToClipboard()
      notify(COPY_SUCCESS)
    }
        }
        let reload = () => {
      window.location.reload()
    }
        
          return (
          <div className="relative">
             <img className ='absolute w-full h-full object-cover mix-blend-overlay'src ='https://img.lovepik.com/photo/50055/7195.jpg_wh300.jpg'/>
           <div className="flex relative justify-center pt-[120px] pb-30"><p  className="text-5xl bg-white">Generate  password</p> </div>
        <div className="flex relative justify-center items-center h-full  pt-6 pb-16">
          < div className='bg-[#23235b] h-[450px] w-[400px] px-8 py-4 pt-6 pb-8 mb-4'>
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
                        <div className="flex items-center pt-3 justify-center"><button  onClick={handleGeneratePassword}className=" bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline">Generate Password </button></div>
                        
                        <div className="flex items-center pt-3 justify-center"><button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          onClick={reload} 
          type='submit'>Reload</button></div>
                          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />  
                      </div>
                    </div>
                    </div>
                    </div>
                    
          )
        }

        export default App