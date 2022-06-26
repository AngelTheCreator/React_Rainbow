import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue', 
  'lighblue','green',
  'greenyellow','yellow', 
  'orange', 'red'
])
let colorMap = colors.map((color, i) => {
  return (
    <ColorBlock key={`${color}_${i}`} color={color} />
  )
})
  return (
    <div className="App">
      {colorMap}
      <ColorForm/>
    </div>
    
  )

}


export default App;
