import React, {useContext, useState} from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { PostContext } from '../context/PostContext'

const EditForm = ({theData}) => {

   const id = theData.id

   const [title, setTitle] = useState(theData.title)
   const [body, setBody] = useState(theData.body)

   const {updateData} = useContext(PostContext)

   const updatedData = {id, title, body}

   const handleSubmit = (e) => {
      e.preventDefault()
      updateData(id, updatedData)
   }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
         <FormGroup className="mb-3">
            <FormControl
               type="text" 
               placeholder='title'
               name='title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
         </FormGroup>
         <FormGroup className="mb-3">
            <FormControl
               type="text" 
               placeholder='body' 
               name='body'
               value={body}
               onChange={(e) => setBody(e.target.value)}
            />
         </FormGroup>
         <div className="d-grid gap-2">
            <Button type='submit' size='sm' className='App-button-primary'>Edit</Button>
         </div>
      </Form>
    </React.Fragment>
  )
}

export default EditForm