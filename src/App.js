import react , { useState } from 'react'

const component = () => {
  const [inputValue,setInputValue]= useState('');
  const [submittedValue,setSubmittedValue] = useState('');

  const handleInputChange = (event) =>{
          setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };
  return (
<div>
<form onSubmit={handleSubmit}>
  <input type="text" value={inputValue} onChange={handleInputChange}/>
  <button type="submit">Submit</button>
  </form>
  {
    submittedValue && (
      <p>{submittedValue}</p>
    )
  }
</div>
  );


};
export default component; 