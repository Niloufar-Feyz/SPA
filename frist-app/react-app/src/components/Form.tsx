import React ,{useRef} from "react";

function Form() {
const nameRef=useRef<HTMLInputElement>(null);
const ageRef=useRef<HTMLInputElement>(null);
const person={name:'',age:0};


const handleSubmit=(event: FormEvent)=>{
event.preventDefault();
if(nameRef.current !== null)
person.name=nameRef.current.value;
if (ageRef.current!== null)
   person.age=parseInt(ageRef.current.value);
console.log(person);
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">Name</label>
        <input ref={nameRef} id="name" type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-lable">Age</label>
        <input ref={ageRef} id="age" type="number" className="form-control"></input>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;
