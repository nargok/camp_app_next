interface Props {
  buttonText: string
  color: string
  hoverColor: string
  handleClick: Function
}

const ActionButton = ({
  buttonText,
  color,
  hoverColor,
  handleClick,
}: Props) => {
  return (
    <button
      className={`focus:shadow-outline mr-4 rounded ${color} py-2 px-4 font-bold text-white ${hoverColor} focus:outline-none`}
      type="button"
      onClick={() => handleClick()}
    >
      {buttonText}
    </button>
  )
}

export default ActionButton
