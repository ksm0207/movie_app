import React from 'react';


function Coffee({name , age , job}){
  return(
  <div>
    <h4>{name}</h4>
    <h4>{age}</h4>
    <h4>{job}</h4>
  </div>
  

  )
}

const lists = [
  {
    name : "김성민",
    age  : "26",
    job  : "1"
  }
]


function App() {
  return (
    <div>
      <h4>Hello</h4>
      {
        lists.map(cur =>(
          <Coffee
            name = {cur.name} age = {cur.age} job = {cur.job}
          />
          ))
        }
 
    </div>
  );
}

export default App;
