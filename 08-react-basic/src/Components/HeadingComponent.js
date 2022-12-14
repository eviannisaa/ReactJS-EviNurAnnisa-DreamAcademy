import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'

const HeadingComponent = () => {
  return (
    <div className='d-flex flex-row items-center gap-3'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mt-3 -mb-4 pb-3 pr-1 font-semibold'>My To Do List</h1>
      <div>
         <FontAwesomeIcon icon={faPen} size="2x" bounce className='text-violet-800 delay-600 animate-bounce mt-4' />
      </div>
   </div>
  )
}

export default HeadingComponent