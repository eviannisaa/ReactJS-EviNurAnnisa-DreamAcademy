import React, {useContext, useState} from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { PostContext } from '../context/PostContext'

const AddForm = () => {

   const {postData} = useContext(PostContext)

   const [newData, setNewData] = useState({
      title:'', body:''
   })

   const onInputChange = (e) => {
      setNewData({...newData, [e.target.name]:e.target.value })
   }

   const {title, body} = newData

   const handleSubmit = (e) => {
      e.preventDefault()
      postData(title, body)
   }

  return (
    <React.Fragment>
         <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
               <FormControl
                  type="text" 
                  placeholder='title' 
                  required 
                  name='title'
                  value={title}
                  onChange={(e) => onInputChange(e)}
               />
            </FormGroup>
            <FormGroup className="mb-3">
               <FormControl
                  type="text" 
                  placeholder='body' 
                  required
                  name='body'
                  value={body}
                  onChange={(e) => onInputChange(e)}
               />
            </FormGroup>
      
            {/* <input type="checkbox" /> */}
            <div className="d-grid gap-2">
               <Button type='submit' size='sm' className='App-button-primary'>Save</Button>
            </div>
      </Form>
    </React.Fragment>
  )
}

export default AddForm