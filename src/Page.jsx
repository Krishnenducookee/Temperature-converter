import React from 'react'

const Page = ({label,onChange,value,name}) => {
  return (
    <div>
    <label className='text-white block'>{label}</label>  
    <input
     type="number"
     value={value}
     onChange={onChange}
     name={name}
    className="w-48 bg-black shadow rounded text-white"
/>

    </div>
  )
}

export default Page