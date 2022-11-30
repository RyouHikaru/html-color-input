const BoxColor = ({ color, hexValue, isDarkText }) => {
  return (
    <div
		className="boxColor"
		style={{
			backgroundColor: color,
			color: isDarkText ? "#000" : "#fff"
		}}
	>
		<label htmlFor="color">{color ? color.toUpperCase() : 'No color input'}</label>
		<label htmlFor="hexValue">{hexValue ? hexValue : null}</label>
	</div>
  )
}

export default BoxColor;