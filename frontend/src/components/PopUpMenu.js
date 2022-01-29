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
  
  const [mgrsPopUp, openMgrsPopUp] = useState(false);
 
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
      <MenuItem onClick={() => testFetch()}>Menu Option 1</MenuItem>
      <MenuItem >Menu Option 2</MenuItem>
      <MenuItem >Menu Option 3</MenuItem>
      </Menu>
    </div>
  );
}

export default PopUpMenu;