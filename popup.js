import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'

export default function popup(props) {
    const [title, children , openPopup , setOpenPopup]=props
  return (
    // <div>popup</div>
    <Dialog open={openPopup}>
        <DialogTitle>
            <div>
                title goes ghere
            </div>
        </DialogTitle>

        <DialogContent>
            <div>
                content goes here
            </div>
        </DialogContent>


    </Dialog>
  )
}

