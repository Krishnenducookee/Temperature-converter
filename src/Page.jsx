import React from 'react'

const Page = ({label,onChange,value,name}) => {
  return (
    <div> <form>
    <label><h3>{label}</h3></label>  
    <input
     type="text"
     value={value}
     onChange={onChange}
     name={name}
     id="first_name"
className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>

    </form></div>
  )
}

export default Page