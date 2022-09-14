import { ProyectoProvider } from './context/ProyectosProvider'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'




function App() {

  return (
    <ProyectoProvider>
        <Header />
        <Main />
        <Footer />
    </ProyectoProvider>
  )
}



export default App
