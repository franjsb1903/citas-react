import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientsList from './components/PatientsList'

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem('patients')) ?? []
  )
  const [patientToEdit, setPatientToEdit] = useState({})

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const addPatient = patient => {
    setPatients([...patients, patient])
  }

  const editPatient = patient => {
    const updated = patients.map(patientState =>
      patientState.id === patient.id ? patient : patientState
    )
    setPatients(updated)
    setPatientToEdit({})
  }

  const deletePatient = id => {
    const noDeleted = patients.filter(patient => patient.id !== id)
    setPatients(noDeleted)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          addPatient={addPatient}
          patientToEdit={patientToEdit}
          editPatient={editPatient}
        />
        <PatientsList
          patients={patients}
          setPatientToEdit={setPatientToEdit}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
