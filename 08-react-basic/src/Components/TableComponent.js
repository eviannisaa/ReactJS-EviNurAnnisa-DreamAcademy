import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

const TableComponent = ({data, handleEdit, handleDelete}) => {
  return (
    <div className='max-w-2xl items-center mt-20 mb-20'>
      <table className='table-auto md:border-collapse border-blue-500 border-1 border rounded hover:border-collapse'>
         <thead>
            <tr>
               <th className='border border-blue-500 text-center'>No</th>
               <th className='border border-blue-500 px-4'>Activity</th>
               <th className='border border-blue-500 text-center'>Status</th>
               <th className='border border-blue-500 text-center'>Action</th>
            </tr>
         </thead>
         <tbody>
            {data.map((todo, i) => {
               return (
               <tr key={todo.id}>
                  <td className='border border-blue-500 py-2 px-4'>{i+1}</td>
                  <td className='border border-blue-500 py-2 px-4'>{todo.activity}</td>
                  <td className='border border-blue-500 py-2 px-4 text-center'>{todo.status ? <span className="text-green-600 font-bold">Done</span> : <span className="text-red-600 font-bold">Not Started</span>}</td>
                  <td className='border border-blue-500 py-2 px-4'>
                     <div className='d-flex flex-row gap-3'>
                        <button className='bg-blue-500 w-max px-3.5 py-1.5 rounded hover:bg-blue-700 text-white font-bold text-sm ease-out duration-300' onClick={() => handleEdit(todo.id)}>
                           <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className='bg-red-500 px-3 rounded hover:bg-red-700 text-white font-bold text-sm ease-out duration-300' onClick={() => handleDelete(todo.id)}>
                           <FontAwesomeIcon icon={faXmark} className="font-bold" size='lg' /> 
                        </button>
                     </div> 
                  </td>
               </tr>  
               )
            })}
         </tbody>
      </table>
    </div>
  )
}

export default TableComponent