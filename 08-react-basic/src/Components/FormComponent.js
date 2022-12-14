import React, { useState, useEffect } from 'react'
import TableComponent from './TableComponent'
import { uid } from 'uid'

const FormComponent = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      activity: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam numquam fugiat, praesentium repellat voluptatum consectetur? Reprehenderit provident dignissimos repudiandae obcaecati!",
      status:false
    },
    {
      id:2,
      activity: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam numquam fugiat, praesentium repellat voluptatum consectetur? Reprehenderit provident dignissimos repudiandae obcaecati!",
      status:true
    }
  ])

  const [isUpdate, setIsUpdate] = useState({
    id: null, 
    check: false
  })

  const [formData, setFormData] = useState({
    activity:"",
    status:false
  })

  const handleChange = (e) => {
    let data = e.target.name
      setFormData({
         ...formData,
         [data]:e.target.type === "checkbox" ? e.target.checked : e.target.value
      })

  console.log(e.target.checked)
    // let data = {...formData}
    // data[e.target.name] = e.target.value
    // setFormData(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = [...todos]

    if(formData.activity === ""){
      alert('input tidak boleh kosong')
      return false
    }else{
      alert('simpan data?')
    }

    if(isUpdate.check){
      data.forEach((todo) => {
        if(todo.id === isUpdate.id) {
          todo.activity = formData.activity
          todo.status = formData.status
        }
      })
    }else{
      data.push({ id: uid(), activity: formData.activity, status: formData.status })
    }

    setTodos(data)
    setFormData({ activity: "", status: false})
    setIsUpdate({ id: null, check: false })

  }

  const handleEdit = (id) => {
    let data = [...todos]
    let foundData = data.find((todo) => todo.id === id)
    setFormData({ activity: foundData.activity, status: foundData.status })
    setIsUpdate({ id: id, check: true })
  }

  const handleDelete = (id) => {
    let data = [...todos]
    let filteredData = data.filter(todo => todo.id !== id)
    

    if(window.confirm('hapus data?') === true){
      return setTodos(filteredData)
    }else{
      return false
    }
 
  }

  useEffect(() => {
    console.log("formData", formData)
  }, [formData])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex flex-row gap-4'>
            <label htmlFor="activity" className='font-bold -mt-1'>Activity</label>
            <textarea
              type="text"
              id="activity"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              rows="4"
              cols="75"
              placeholder='input activity' 
              className='border-blue-500 rounded border-2 outline-blue-300 px-2' 
            />
          </div>
          <div className='d-flex flex-row gap-4 align-items-center'>
            <label htmlFor="status" className='font-bold me-2 -mt-1'>Status</label>
            <input 
              type="checkbox" 
              id='status'
              name="status"
              value={formData.status}
              onChange={handleChange}
              className=''
            />            
          </div>
        </div>
        <div className='ml-20 mt-4 text-white font-bold'>
          <button type='submit' className='bg-blue-500 px-3 py-1 w-full d-flex justify-center rounded hover:bg-blue-700'>Save</button>
        </div>
      </form>
      <TableComponent 
        data={todos} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default FormComponent