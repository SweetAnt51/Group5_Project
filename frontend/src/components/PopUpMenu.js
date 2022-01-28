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
 
  // const handleModeChange = (view) => {
  //     props.resetPage([]);
  //     props.setMode(view);
  //     handleClose();
  // };

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
      <MenuItem >Menu Option 1</MenuItem>
      <MenuItem >Menu Option 2</MenuItem>
      <MenuItem >Menu Option 3</MenuItem>
      </Menu>
    </div>
  );
}

export default PopUpMenu;