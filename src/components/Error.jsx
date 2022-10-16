const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white uppercase font-bold mb-3 rounded-md p-3">
      <p>{children}</p>
    </div>
  )
}

export default Error
