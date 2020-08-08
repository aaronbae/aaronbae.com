import '../../styles/Utility/toggle.css'

export default function Toggle({checked, click_behavior, width, className}) {
  const switch_style = {
    width: parseInt(width.slice(0, -2)) * 0.8.toString() + "px",
    height: (width/1.7).toString() + "px",
  }
  return (
    <div className={"toggle-container " + className}>
      <label className="toggle-switch" style={switch_style}>
        <input type="checkbox" checked={checked} onChange={click_behavior}/>
        <span className="toggle-slider"></span>
      </label>
    </div>
  )
}


