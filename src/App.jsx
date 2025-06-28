import './App.css'


import SecondsCounter from './components/SecondsCounter'

function App(props) {
  return (
    <>
        <SecondsCounter 
          {...props}
        /> 
    </>
  )
}

export default App
