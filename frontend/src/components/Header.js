import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import PopUpMenu from './PopUpMenu';
// import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/core/styles";


function Header(props) {
    // const [checked, setChecked] = useState(false);
    
    // const CustomSwitch = withStyles({
    //   thumb: {
    //       // Controls default (unchecked) color for the thumb
    //       color:'white',
    //     },
    //     colorSecondary: {
    //     "&.Mui-checked + .MuiSwitch-track": {
    //       backgroundColor: "red",
    //     }},
    //     track: {
    //     backgroundColor: "black"
    //   },

    // })(Switch);
    
    // const controlTheme = () => {
    //     if (props.theme === 'dark'){
    //         setChecked(true);
    //         props.toggleTheme();
    //     }else{
    //         setChecked(false);
    //         props.toggleTheme();
    //     }
    // };
    
    // useEffect( () => {
    //     if (props.theme === 'dark'){
    //         setChecked(false);
    //     }else{
    //         setChecked(true);
    //     }
    // }, [props.theme]);

    
    return( 
        <header style={{padding:'15px',
            // text-align: center;
            width:'100%',
            margin: 'auto',
            height: '22px',
            display:'flex',
            backgroundColor: '#c7c7c7',
            }}>
            <PopUpMenu /> 
            <h1 style={{marginTop: '30px',
                        marginLeft: '15px',
                        fontSize: '28px',
                        width:'100%',
                        alignItems: 'flex-end',
                        justifyContent:'flex-start',
                        flexDirection:'row',
                        display:'flex'
                    }}> 
                {props.text}
            </h1>
            <div
                style={{display:'flex', 
                        width:'100%', 
                        marginRight:'30px', 
                        justifyContent:'flex-end',
                        alignItems:'flex-end'
                    }}
                >
                
                <span >Login</span>
                <span style={{marginLeft:'20px', cursor:'pointer'}}>Apply Today</span>
            </div>
        </header>);    
}

Header.propTypes = {
    text: PropTypes.string
};

Header.defaultProps = {
    text : 'Insert Header Text Here'
};

export default Header;