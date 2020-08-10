import React from "react";
import PropTypes from "prop-types";

function App() {
  return (
      <div className="App">

          {data.map(ss => (

              < Face key={ss.id} name={ss.name} age={ss.age} sex={ss.sex} rating={ss.rating} />
              ))}
         
    </div>
  );
}






const data = [
    {
        id:"1",
        name: "d",
        age: "1",
        sex: "2",
        rating:5
    },
    {
        id:"2",
        name: "sd",
        age: "d",
        sex: "d",
        rating: 4
    },
    {
        id:"3",
        name: "a",
        age: "d",
        sex: "b",
        rating: 3
    },
    {
        id:"4",
        name: "q",
        age: "r",
        sex: "x",
        rating: 2
    }
];

function Face(gu) {
   
    return (
       
        <div>
            <h1>{gu.name}d</h1>
            <h2>{gu.age}</h2>
            <h2>{gu.sex}</h2>
            <h2>{gu.rating}/5</h2>
        </div>);
}

Face.propTypes = { //값 이 잘 들어갔는지 확인 잘안들어가면 그때 오류문구 발생
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};


        export default App;
