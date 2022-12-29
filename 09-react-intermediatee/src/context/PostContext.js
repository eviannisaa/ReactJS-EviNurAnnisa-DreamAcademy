import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const PostContext = createContext()

const PostContextProvider = (props) => {

   const [dataSource, setDataSource] = useState([])

   const getData = async () =>{
      try{
         const res = await axios.get('http://localhost:3000/posts')
         setDataSource(res.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getData()
   }, [])

   const postData = async (title, body, createdAt, lastModified, published) => {
      try {
         const created = new Intl.DateTimeFormat("en-GB", {
            timeStyle: "medium",
            dateStyle: "short",
         })
   
         const formatedDate = created.format(Date.now()).split(', ').join(' | ')

         const res = await axios.post('http://localhost:3000/posts', {
            createdAt : formatedDate, 
            lastModified : formatedDate,
            title,
            body,
            published
      })
      console.log(res)
      setDataSource([...dataSource, {id:uuidv4(), title, body, createdAt, lastModified, published}])
      } catch (error){
         console.log(error)
      }
   }

   const deleteData = async(id) => {
      await axios.delete(`http://localhost:3000/posts/${id}`)
     
      setDataSource(dataSource.filter(val => val.id !== id))
   }

   const updateData = async (id, updatedData) => {
      try {
        const res = await axios.patch(`http://localhost:3000/posts/${updatedData.id}`, updatedData)
        console.log(res)
      } catch (error) {
        console.error(error)
      }
      setDataSource(dataSource.map((val) => (val.id === id ? updatedData : val)))
    }

  return (
    <PostContext.Provider value={{dataSource, postData, deleteData, updateData}}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostContextProvider