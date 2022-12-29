import React, { useContext, useState, useEffect } from 'react'
import { PostContext } from '../context/PostContext'
import { Modal, ModalTitle, ModalHeader, ModalBody, Button } from 'react-bootstrap'
import EditForm from './EditForm'


const ShowData = ({data}) => {
  const {deleteData} = useContext(PostContext)

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    handleClose()
 }, [data])

  return (
    <React.Fragment>
     <td>{data.id}</td>
     <td>{data.title}</td>
     <td>{data.createdAt}</td>
     <td>{data.lastModified}</td>
     <td>{data.published}</td>
     <td style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItem:'center', justifyContent:'center'}}>
      <Button onClick={handleShow} className='App-button-primary' size='sm'>
         Edit
      </Button>
      <Button onClick={() => deleteData(data.id)} className='App-button-danger' size='sm'>
         Delete
      </Button>
     </td>

         <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton>
               <ModalTitle>Edit</ModalTitle>
            </ModalHeader>
            <ModalBody>
               <EditForm theData={data}/>
            </ModalBody>
            {/* <div>
              <Button onClick={handleClose} size='sm'>close</Button>
            </div> */}
         </Modal>

    </React.Fragment>
  )
}
  
export default ShowData