import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Studies = () => {
  return (
    <div className='estudios-container'>
        <h1>Estudios</h1>
        <div className='estudios-items'>          
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Instituto Politecnico Pilar Constanzo
          </Typography>
        </Stack>
        
        <Typography gutterBottom variant="h6" component="div">
            2013 - 2017
        </Typography>
        <Typography color="text.secondary" variant="body2">
        Educacion media, graduado con el tecnico de informatica, sobresaliendo en liderazgo y entrega. Cursado en Santo Domingo, Republica Dominicana.
        </Typography>
        </Box>        
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Titulo
          </Typography>
          <Stack direction="column" spacing={1}>
            <Chip color="primary" label="Tecnico en informatica" size="medium"/>
          </Stack>
      </Box>
      </Card>
                
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
          Instituto Tecnologico de las Americas
          </Typography>
        </Stack>
        
        <Typography gutterBottom variant="h6" component="div">
            2017 - 2020
        </Typography>
        <Typography color="text.secondary" variant="body2">
        Educacion tecnico superior, graduado con el tecnico de desarrollo de software. Cursado en Santo Domingo, Republica Dominicana.
        </Typography>
        </Box>
             
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Titulo
          </Typography>
          <Stack direction="column" spacing={1}>
            <Chip color="primary" label="Tecnico en desarrollo de software" size="medium"/>
          </Stack>
      </Box>
        
      </Card>
                
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Ingles
          </Typography>
        </Stack>
        
        <Typography gutterBottom variant="h6" component="div">
            2018 - 2019
        </Typography>
        <Typography color="text.secondary" variant="body2">
        Completando el programa de ingles por inmersion, logrando obtener el ingles como segunda lenga, certificado por EFSet como C1. Cursado en la Universidad Apec, Santo Domingo, Republica Dominicana.
        </Typography>
        </Box>
             
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Titulo
          </Typography>
          <Stack direction="column" spacing={1}>
            <Chip color="primary" label="Ingles avanzado C1" size="medium"/>
          </Stack>
      </Box>
      </Card>
        </div>
        

        
      
    </div>
  )
}

export default Studies
