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
     setremainder(Number(input1) % Number(input2));
    }

    //  useEffect(() => {
    //   result()
    //  },[input1,input2])

  return (
    <div className="flex flex-col justify-center bg-gray-500 h-screen w-full">
      <div className="text-center">
        <div className='space-x-4'>
        {/* <button className='bg-yellow-500 p-1 rounded' onClick={() => setchange(change+2)}  >Click High</button>
        <button className='bg-yellow-500 p-1 rounded' onClick={ () => setchange(change-2)} >Click Low </button> */}
        <input type='number' value={input1}
         onChange={(e) => {setinput1(e.target.value)}}
        className='border border-black rounded p-2 shadow-md shadow-gray-300'/>
        <input type='number' value={input2}
         onChange={(e) => {setinput2(e.target.value)}}
        className='border border-black rounded p-2 shadow-md shadow-gray-300'/>
        <button className=' border border-black bg-yellow-500 font-semibold hover:text-white shadow-inner shadow-white p-1 rounded-lg'onClick={result} > Click here</button>
        </div>
        <div className='bg-red-00 w-full justify-center flex lg:p-8'>
         <div className='bg-gray-700 lg:w-6/12 lg:p-6 rounded-lg shadow-inner shadow-white'>
        <div className='text-xl font-bold text-white'>ADD: {add}</div>
        <div className='text-white text-xl font-bold'>Multiply:{' '}{multi}</div>
        <div className='text-white text-xl font-bold'>Sub:{' '}{sub}</div>
        <div className='text-white text-xl font-bold'>Division: {division}, Remainder: {remainder}</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Ashu;