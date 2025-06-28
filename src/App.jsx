import './App.css'


import SecondsCounter from './components/SecondsCounter'

function App(props) {

  

  return (
    <>
        <SecondsCounter 
          // counter = {props.counter}
          {...props}
        /> 
    </>
  )
}

export default App
