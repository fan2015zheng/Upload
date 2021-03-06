import './App.css'
import { useRef, useState } from "react"



function App() {
  const [url, setUrl] = useState("")
  const fileInputRef = useRef()

  function PostFile(file) {
    const form = new FormData()
    form.append("file", file)
    fetch("https://upload999.herokuapp.com/", {
      method: "POST",
      body: form
    }).then(res=>res.json())
    .then(res=>{

      setUrl("https://upload999.herokuapp.com/Hello2/"+res.newFileName)
    })
  }

  return (<>
    <div className="_app">
      <input ref={fileInputRef} type="file" name="file" /> 
        <br/><br/>
      <button onClick={()=>{
        const file = fileInputRef.current.files[0]
        if(file) {
          PostFile(file)
        }
      }}>Upload</button>

      <br/><br/>

      <img src={url} alt="test images"/>
    </div>
  </>)
}

export default App
