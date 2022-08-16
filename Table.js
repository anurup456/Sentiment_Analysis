import React,{useState} from 'react'
import { Box, flexbox } from '@mui/system'
import { Modal, Typography } from '@mui/material'
import {Button} from '@mui/material'
// import  Typography  from '@mui/material/styles/createTypography'
import Popup from  '/home/anurup/Desktop/todo/src/Components/popup.js';


const Table =() => {
  const [open, setOpen]= useState(false)
  const[openPopup, setOpenPopup]=useState(false)
  return (
    <>

  <div class="content">
    
    <div class="container">
      <h2 class="mb-5">Table #6</h2>
      

      <div class="table-responsive">

        <table class="table table-striped custom-table">
          <thead>
            <tr>
              
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">No of Applicants</th>
            
            </tr>
          </thead>
          <tbody>
            <tr scope="row">

              
                      
                      <td>
                        1392
                      </td>
                      <td><a href="#">Atomic bomb</a></td>
                      <td>
                        <Button onClick={()=> setOpen(true)}>Open Dialogue </Button>
                        {/* <Modal open={open} onClose={()=> setOpen(false)} >
                          
                            <Box >
                              <Typography>
                                bgkuhkihjijkijiljjjji
                              </Typography>
                            </Box>


                        </Modal> */}
                        {/* <Popup openPopup={openPopup}  setOpenPopup={setOpenPopup}/> 
                         openPopup={openPopup}
                        setOpenPopup={setOpenPopup} */}
                        {/* </Popup> */}

                        
                        
                        
                        {/* <a href="#">123456789</a>
                      </td>
                     
            </tr>

            <tr>
              
              <td>4616</td>
              <td><a href="#">Granade</a></td>
              <td>
                {/* Graphic Designer */}
                {/* <small class="d-block">25</small> */}
                <a href="#">123456789</a>
              </td>
              
            </tr>
           
            <tr>
              
              <td>4616</td>
              <td><a href="#">Desi katta</a></td>
              <td>
                {/* Graphic Designer */}
                {/* <small class="d-block">30</small> */}
                <a href="#">123456789</a>
              </td>
             
            </tr>
            
            
          </tbody>
        </table>
      </div>


    </div>

  </div>
    
    

    
  
    </>
  )
}

export default Table


