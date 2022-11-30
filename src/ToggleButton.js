const ToggleButton = ({ isDarkText, setIsDarkText }) => {
  return (
    <button
      onClick={(e) => setIsDarkText(!isDarkText)}
    >Change text color</button>
  )
}

export default ToggleButton;