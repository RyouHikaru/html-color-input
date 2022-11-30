import colorNames from 'colornames';

const InputColor = ({ color, setColor, setHexValue }) => {
  return (
    <form>
      <input
        autoFocus
        type="text"
        placeholder="Input color"
        className="inputColor"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  )
}

export default InputColor;