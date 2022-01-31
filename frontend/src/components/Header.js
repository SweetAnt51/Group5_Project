// import { useState } from 'react';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import PopUpMenu from './PopUpMenu';
import { makeStyles } from '@material-ui/core/styles';

function Header(props) {
    
    const useStyles = makeStyles((theme) => ({
        header: {   
                    padding:'15px',
                    width:'100%',
                    margin: 'auto',
                    height: '22px',
                    display:'flex',
                    backgroundColor: '#c7c7c7',
        },

        title: {
                    marginTop: '30px',
                    marginLeft: '15px',
                    fontSize: '28px',
                    width:'100%',
                    alignItems: 'flex-end',
                    justifyContent:'flex-start',
                    flexDirection:'row',
                    display:'flex'
        },

        linkContainer: {
                    display:'flex', 
                    width:'100%', 
                    marginRight:'30px', 
                    justifyContent:'flex-end',
                    alignItems:'flex-end'
        },

        link : {
                    marginLeft:'20px', 
                    cursor:'pointer'
        }
        
      }));

    const classes = useStyles();
    console.log(props.isLoggedIn)
    return( 
        <header className={classes.header}>

            <PopUpMenu setMode={props.setMode}/> 
            
            <h1 className={classes.title}> 
                {props.text}
            </h1>
            
            <div className={classes.linkContainer}>                
                <span className={classes.link} onClick={() => props.setIsLoggedIn(false)}>
                        {props.isLoggedIn ?
                            "Log Out"
                        :
                            "Login"
                        }
                        
                </span>
                <span className={classes.link} onClick={() => props.setMode('apply')}>Apply Today</span>
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