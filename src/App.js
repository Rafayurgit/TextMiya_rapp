import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg: message, type: type
      })

      setTimeout(()=>{
        setAlert(null);

      },1500)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = ' #042743';
      showAlert("Darkmode Has been Enabled", "Success ");
      document.title="TextMiya-DARK MODE";
        }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode Has been Enabled", "success");
      document.title="TextMiya_Home";
    }
  }

  return (
    <>
    <Navbar title="TextMiya" mode={mode} toggleMode={toggleMode} />
    <Alert Alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} mode={mode}/>
    </div>
    </>
  );
}

export default App;
