export function Slider({ value, onValueChange, min, max, step }) {
  return (
    <input
      type='range'
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([parseInt(e.target.value)])}
    />
  );
}