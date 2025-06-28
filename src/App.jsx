import './App.css'


import SecondsCounter from './components/SecondsCounter'

function App(props) {

  const seconds = {props}

  return (
    <>
        <SecondsCounter 
          {...props}
        /> 
    </>
  )
}

export default App
