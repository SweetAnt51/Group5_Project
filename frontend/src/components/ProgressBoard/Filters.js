import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



function Filters(props) {
    const toggleDrawer = props.toggleDrawer
    const open = props.open
    const drawer = props.drawer



  const handleFilterChange = (name, value) => {
        var data = {...props.filters}
        data[name] = value
        props.setFilters({...data})
        console.log(value)
  }

  const majors = [
    {label: 'Computer Science', value: "Computer Science"},
    {label: 'English', value: "English"},
    {label: 'Math', value: "Math"},
    {label: 'Art', value: "Art"},
    {label: 'Sports Marketing', value: "Sports Marketing"},
    {label: 'Culinary Arts', value: "Culinary Arts"},
    {label: 'Computer Engineering', value: "Computer Engineering"},
    {label: 'Accounting', value: "Accounting"},
  ]
  
  const formSection = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450, bgcolor: '#d9d9d9', height:'100%'  }}
      role="presentation"
    > 

      <Stack spacing={3}>
        <TextField
          id="date"
          label="Start Date"
          type="date"
          value={props.filters.start_date}
          sx={{ m: 1, width: '40ch',marginTop:'10px', marginBottom:'10px' }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange = {(e) => handleFilterChange('start_date', e.target.value)}
        />

        <TextField
          id="date"
          label="End Date"
          type="date"
          value={props.filters.end_date}
          sx={{ m: 1, width: '40ch', left:'8px', marginTop:'10px', marginBottom:'10px' }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange = {(e) => handleFilterChange('end_date', e.target.value)}
        />          
      
        <TextField required={false}
                id = "major"
                label = "Major"
                type = "select"
                select
                value = {props.filters.major}
                onChange = { (e) => handleFilterChange('major', e.target.value)}
                sx={{m: 1, width: '40ch', left:'8px', marginTop:'10px', marginBottom:'10px'}}
                >
                <MenuItem value={''}>
                        {''}
                </MenuItem>
                {majors.map((option) => {
                    return (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    )
                    })}
        </TextField>
        <TextField required={false}
                        id = {'applicant_name'}
                        label = {'Name'}
                        type = {'text'}
                        value = {props.filters.name}
                        onChange = {(e) => handleFilterChange('name', e.target.value)}
                        sx={{m: 1, width: '40ch', left:'8px', marginTop:'10px', marginBottom:'10px'}}
                        />
        </Stack>

      
    </Box>
  );

  return (
    <div>
      <Drawer
        open={open}
        ModalProps={{ onBackdropClick: toggleDrawer(drawer, false) }}
        anchor={drawer}
        id = 'test'
      >
        <Box
                    component="form"
                    sx={{
                        height:'100%',
                        backgroundColor:'#d9d9d9'
                    }}
                    autoComplete="off"
                    
                    
                >
          <div style={{   textAlign:'center',
                              margin:'auto',
                              height:'90%',
                          }}>
                        <h2 id={'filterHeadline'} style={{fontSize:'18px'}}>Select Applicant Filters</h2>
                        {formSection(drawer)}
          </div>
        </Box>
      </Drawer>
    </div>
  );
}



Filters.defaultProps = {
  drawer: "left",
  open: false,
}

export default Filters