import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([])

  const addPaciente = paciente => {
    setPacientes([paciente, ...pacientes])
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario addPaciente={addPaciente} />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
