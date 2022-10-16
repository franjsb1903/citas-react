import { useState, useEffect } from 'react'
import Error from './Error'
import { FormInput, FormTextArea } from './FormInputs'

const initPatient = {
  name: '',
  owner: '',
  email: '',
  date: '',
  syptoms: '',
}

const Form = ({ addPatient, patientToEdit, editPatient }) => {
  const [patient, setPatient] = useState(initPatient)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (patientToEdit.id) {
      setPatient(patientToEdit)
    }
  }, [patientToEdit])

  const clearForm = () => {
    setPatient(initPatient)
  }

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const dateNow = Date.now().toString(36)

    return `${random}${dateNow}`
  }

  const onChangeInput = e => {
    const { value, name } = e.target

    setPatient({
      ...patient,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!Object.values(patient).every(value => value)) {
      setError(true)
      return
    }
    setError(false)

    if (patientToEdit.id) {
      patient.id = patientToEdit.id
      editPatient(patient)
    } else {
      patient.id = generateId()
      addPatient(patient)
    }

    clearForm()
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error> Todos los datos son obligatorios </Error>}
        <FormInput
          label="Nombre Mascota"
          name="name"
          onChangeInput={onChangeInput}
          placeholder="Nombre de la mascota"
          type="text"
          value={patient.name}
        />
        <FormInput
          label="Nombre Propietario"
          name="owner"
          onChangeInput={onChangeInput}
          placeholder="Nombre del propietario"
          type="text"
          value={patient.owner}
        />
        <FormInput
          label="Email"
          name="email"
          onChangeInput={onChangeInput}
          placeholder="Email Contacto Propietario"
          type="email"
          value={patient.email}
        />
        <FormInput
          label="Alta"
          name="date"
          onChangeInput={onChangeInput}
          type="date"
          value={patient.date}
        />
        <FormTextArea
          label="Síntomas"
          name="syptoms"
          onChangeInput={onChangeInput}
          placeholder="Describe los Síntomas"
          value={patient.syptoms}
        />

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patientToEdit.id ? 'Editar paciente' : 'Añadir paciente'}
        />
      </form>
    </div>
  )
}

export default Form
