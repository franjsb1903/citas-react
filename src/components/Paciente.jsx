const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Fran</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">fran@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{' '}
        <span className="font-normal normal-case">10 diciembre de 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{' '}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat,
          architecto culpa aliquid explicabo illo nobis debitis ipsum dolore
          eligendi magnam provident. Asperiores numquam praesentium repudiandae
          ratione voluptates ut delectus?
        </span>
      </p>
    </div>
  )
}

export default Paciente
