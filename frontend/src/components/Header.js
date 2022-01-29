import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PopUpMenu from './PopUpMenu';

function Header(props) {
  
    return( 
        <header style={{padding:'15px',
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