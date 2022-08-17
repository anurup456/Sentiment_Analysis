import React,{useState} from 'react'
import { Box, flexbox } from '@mui/system'
import { Modal, Typography } from '@mui/material'
import {Button} from '@mui/material'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import  Typography  from '@mui/material/styles/createTypography'
// import Popup from  '/home/anurup/Desktop/todo/src/Components/popup.js';


const Table =() => {
  const [open, setOpen]= useState(false)
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  function toggleModal(id){
    const myModal = document.getElementById(id);
    if(myModal.classList.contains("show")){
      myModal.classList.remove("show");
      myModal.style.display = "none"
;    }else{
      myModal.classList.add("show");
      myModal.style.display="block"
    }
  }
  // const[openPopup, setOpenPopup]=useState(false)
  return (
    <>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onClick={()=> toggleModal("exampleModal")}>Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  <div className="content">
    
    <div className="container">
      <h2 class="mb-5">Table #6</h2>
      

      <div className="table-responsive">

        <table className="table table-striped custom-table">
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
                        <Button onClick={()=> toggleModal("exampleModal")}>Open Dialogue </Button>
                        <Modal open={open} onClose={()=> setOpen(false)} >
                          
                            <Box >
                              <Typography>
                                bgkuhkihjijkijiljjjji
                              </Typography>
                            </Box>


                        </Modal>
                        {/* <Popup openPopup={openPopup}
                        setOpenPopup={setOpenPopup}/> 
                          */}
                     

                         {/* <Popup trigger={<button> 1</button>} position="right center" {...{overlayStyle}}>
                          <div>Popup content here !!</div>
                         </Popup> */}

                        
                        
                        
                        {/* <a href="#">123456789</a>
                      </td>
                     
            </tr>

            <tr>
              
              <td>4616</td>
              <td><a href="#">Granade</a></td>
              <td>
                {/* Graphic Designer */}
                {/* <small class="d-block">25</small> */}
                {/* <a href="#">123456789</a> */}
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


