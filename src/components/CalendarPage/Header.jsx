import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'

function Header({openDialog}) {
    return (
        <Box mb={3} display="flex" justifyContent="space-between">
          <Typography align="center" variant="h4" >{new Date().toLocaleDateString()}</Typography>
          <Button variant="contained" color="primary" onClick={(e) => openDialog(e, null, 'create')}>Add event</Button>
        </Box>
    )
}

export default Header
