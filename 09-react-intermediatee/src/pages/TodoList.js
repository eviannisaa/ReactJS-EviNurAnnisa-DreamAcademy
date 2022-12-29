import React, { useState, useContext, useEffect} from 'react'
import { Modal, ModalBody, ModalHeader, ModalTitle, Table , Button, Form} from 'react-bootstrap'
import { PostContext } from '../context/PostContext'
import AddForm from './AddForm'
import ShowData from './ShowData'

const TodoList = () => {
   const {dataSource} = useContext(PostContext)

   const [show, setShow] = useState(false)
   const handleShow = () => setShow(true)
   const handleClose = () => setShow(false)

   useEffect(() => {
      handleClose()
   }, [dataSource])

  return (
    <React.Fragment>
      <div className='App-Todo'>
         <a href=""><b><i>User</i></b></a>
         <div style={{display:'flex', flexDirection:'row', columnGap: '20px'}}>
            <Button onClick={handleShow} size='sm' style={{width:'200px'}} className='App-button-primary'>+Add</Button>
            <Form.Select aria-label="Default select example">
               <option>Author name</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </Form.Select>
         </div>
      </div>
      <Table size='lg' striped bordered style={{width:"80%"}}>
         <thead>
            <tr>
               <th>ID</th>
               <th>Title</th>
               <th>Created At</th>
               <th>Last Modified</th>
               <th>Publish</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {
               dataSource.map((data, i) => (
                  <tr key={i}>
                     <ShowData data={data}/>
                  </tr>
               ))
            }
         </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
         <ModalHeader closeButton>
            <ModalTitle>Add</ModalTitle>
         </ModalHeader>
         <ModalBody>
            <AddForm/>
         </ModalBody>
         {/* <Button onClick={handleClose} variant="danger" size='sm'>Close</Button> */}
      </Modal>
  
    </React.Fragment>
  )
}

export default TodoList 