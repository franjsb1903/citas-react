export const FormInput = ({
  label,
  name,
  type,
  value,
  onChangeInput,
  placeholder,
}) => (
  <div className="mb-5">
    <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder ?? ''}
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={value}
      onChange={onChangeInput}
    />
  </div>
)

export const FormTextArea = ({
  label,
  name,
  value,
  onChangeInput,
  placeholder,
}) => (
  <div className="mb-5">
    <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  </div>
)
