import React , { useState, useEffect}from 'react'

const Ashu = () => {
   const [input1,setinput1] = useState(0);
   const [input2, setinput2] = useState (0);
   const [add , setadd] = useState (0);
   const [multi,setmulti] = useState (0);
   const [sub, setsub] = useState(0);
   const [division, setdivision] = useState(0);
   const[remainder,setremainder] = useState (0);
    const result = () => {
     setadd(Number(input1) + Number(input2));
     setmulti(Number(input1) * Number(input2));
     setsub(Number(input1) - Number(input2));
     setdivision(Number(input1) / Number(input2));
     setremainder(Number(input1) % Number(input2))
    }

     useEffect(() => {
      result()
     },[input1,input2])

  return (
    <div className="flex flex-col mt-8">
      <div className="bg-green-00 text-center text-3xl font-bold"> </div>
      <div className="bg-red-00 text-center mt-2 space-x-2">
        {/* <button className='bg-yellow-500 p-1 rounded' onClick={() => setchange(change+2)}  >Click High</button>
        <button className='bg-yellow-500 p-1 rounded' onClick={ () => setchange(change-2)} >Click Low </button> */}
        <input type='number' value={input1}
         onChange={(e) => {setinput1(e.target.value)}}
        className='border-2'/>
        <input type='number' value={input2}
         onChange={(e) => {setinput2(e.target.value)}}
        className='border-2'/>
        {/* <button className='bg-yellow-500 p-1 rounded'onClick={result} > Click here</button> */}

        <div className='text-2xl font-bold'>ADD:{add}</div>
        <div>Multiply:{' '}{multi}</div>
        <div>Sub:{' '}{sub}</div>
        <div>Division:{' '}{division}, Remainder:{remainder}</div>
      </div>
    </div>
  );
}

export default Ashu;