const Button = ({ children, color, colorHover, onClick }) => (
  <button
    type="button"
    className={`py-2 px-10 w-40 ${color} hover:${colorHover} text-white font-bold uppercase rounded-lg transition-all`}
    onClick={onClick}
  >
    {children}
  </button>
)

const Patient = ({ patient, setPatientToEdit, deletePatient }) => {
  const { name, owner, email, date, syptoms, id } = patient

  const handleDeleted = () => {
    const response = confirm('Deseas eliminar este paciente?')
    if (response) deletePatient(id)
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{syptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <Button
          color={'bg-indigo-600'}
          colorHover={'bg-indigo-700'}
          onClick={() => setPatientToEdit(patient)}
        >
          Editar
        </Button>
        <Button
          color={'bg-red-600'}
          colorHover={'bg-red-700'}
          onClick={handleDeleted}
        >
          Eliminar
        </Button>
      </div>
    </div>
  )
}

export default Patient
