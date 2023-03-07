import React, { useState } from 'react'

function Register() { 

  const { email , setemail}=useState("");
  const { name , setname}=useState("");
  const { mobile , setmobile}=useState("");
  const { address , setaddress}=useState("");
  const { age , setage}=useState("");
  const { massage , setmassage}=useState("");
  const { doctor , setdoctor}=useState("");
  const { male , setmale}=useState("");
  const { female, setfemale}=useState("");
  const { other, setother}=useState("");


// const handleSubmit =(e){
//   e.preventDefault();
//   let regObj ={ email,name,mobile,address,age,message,doctor,male,female,other}
// }


  return (
    <div className='new-box'>
    <form>
      
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input
        type="email"
        className="form-control"
        id="inputEmail4"
        placeholder="Email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        required
      />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Mobile no</label>
      <input
        type="Mobile no."
        className="form-control"
        id="inputPassword4"
        placeholder="mobile no"
        value={mobile}
        onChange={(e)=>setmobile(e.target.value)}
        required
      />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Name</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="name"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
      value={address}
      onChange={(e)=>setaddress(e.target.value)}
      required
    />
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required value={male} onChange={(e)=>setmale(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required value={female} onChange={(e)=>setfemale(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
  
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  required value={other} onChange={(e)=>setother(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    other
  </label>
  
</div>
  <div classNameName="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Age</label>
      <input type="text" className="form-control" id="inputCity" value={age} onChange={(e)=>setage(e.target.value)} required/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Doctor</label>
      <select id="inputState" className="form-control" value={doctor} onChange={(e)=>setdoctor(e.target.value)} required>
        <option selected="">Choose...</option>
        <option>Dr 1</option>
        <option>Dr 1</option>
        <option>Dr 1</option>

      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Dieses</label>
      <input type="text" className="form-control" id="inputZip" value={massage} onChange={(e)=>setmassage(e.target.value)} required/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
    <button type="submit" className="button"  >
    Resitration
  </button>
    </div>
  </div>
</form>
</div>
  )
}

export default Register