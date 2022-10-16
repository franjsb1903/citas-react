import Patient from './Patient'

const Title = ({ text }) => (
  <h2 className="font-black text-3xl text-center">{text}</h2>
)

const Subtitle = ({ text, colorized }) => (
  <p className="text-lg mt-5 mb-10 text-center">
    {text} <span className="text-indigo-600 font-bold">{colorized}</span>
  </p>
)

const PatientsList = ({ patients, setPatientToEdit, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {patients && patients.length ? (
        <>
          <Title text={'Listado pacientes'} />
          <Subtitle text={'Administra tus'} colorized={'Pacientes y Citas'} />
          {patients.map(patient => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatientToEdit={setPatientToEdit}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <Title text={'No hay pacientes'} />
          <Subtitle
            text={'Comienza añadiendo pacientes'}
            colorized={'y aparecerán aquí listados'}
          />
        </>
      )}
    </div>
  )
}

export default PatientsList
