import "./App.css";

export default function App() {
  return <Button onButtonclick={() => {console.log('click 1')}} color:'blue' disabled={true} text='Hello' />;
  <Button onButtonclick={() => {console.log('click 2')}}  disabled={false} text='Hello'/>
}
function Button({color = 'green', disabled, text, onButtonclick}) {
return <button onClick={onButtonclick}
disabled={disabled}
style={{backgroundColor: color, color: "gray"}}>
  {text}
</button>
}