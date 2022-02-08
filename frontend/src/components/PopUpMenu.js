import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '../images/menu.png';


function PopUpMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const testFetch = async () => {
    var formData = new FormData();
    formData.append('test', 'This is a test call');
    await fetch('/get_data',{
      method: "POST",
      body: formData
      }).then(res => {
          if (res.status !== 200){
              console.log(res);
              return false;
          }
        return res.json();
    });
  }

 return (
    <div>
      <img alt='Menu Icon' onClick={handleClick} style={{   left:'15px',
                                                            top:'8px',
                                                            cursor:'pointer'}}
                                                            src={MenuIcon} 
                                                            height='25' 
                                                            width='25' />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem onClick = {() => props.setMode('home')}>Home</MenuItem>
      {props.isLoggedIn ?
          props.role === 'applicant' ?
            <div>
              <MenuItem onClick = {() => props.setMode('apply')}>New Application</MenuItem>
              <MenuItem onClick={() => testFetch()}>Test Fetch</MenuItem>
            </div>
          :
          props.role === 'reviewer' ?
            <div>
              <MenuItem onClick = {() => props.setMode('review')}>Review Applications</MenuItem>
              <MenuItem onClick={() => testFetch()}>Test Fetch</MenuItem>
            </div>
        :
        null

      :
        <div>
          <MenuItem onClick = {() => props.setMode('register')}>Sign Up</MenuItem>
          <MenuItem onClick={() => testFetch()}>Test Fetch</MenuItem>
        </div>
      }
      
      
      
      </Menu>
    </div>
  );
}

export default PopUpMenu;