import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function PermMiniDrawerRight(props){
  const drawerWidth = 80;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: 10,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      marginTop:20,
      overflow: 'visible',
    },
    drawerPaper: {
      width: drawerWidth,
      top:15,
      backgroundColor: 'transparent',
      overflow: 'visible',
    },
    drawerContainer: {
      overflow: 'visible',
      zIndex: 10000
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing(3),
    },
    '@global': {
    '.MuiDrawer-paperAnchorDockedLeft': {
      border: 'none',
      },
    },
    icons: {
      color: '#363636',
      fill: '#363636',
      
    },
    iconContainer : {
      textAlign: 'center',
      justifyContent : 'center'
    }
  }));
    
    const classes = useStyles()
    // const scrollTo = (element) => {
    //     document.getElementById(element).scrollIntoView()
    // }

    return(
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button key={1} onClick={() => alert('not implemented yet')}>
                <ListItemIcon className={classes.iconContainer}>
                  <article className="icon-tooltip">
                    <HomeIcon fontSize="large" className={classes.icons} /><br/>
                    <span className="icon-tooltiptext">Home</span>
                  </article>
                </ListItemIcon>
              </ListItem>
              <ListItem button key={1} onClick={props.toggleDrawer('left', true)}>
                <ListItemIcon className={classes.iconContainer}>
                  <article className="icon-tooltip">
                    <ManageSearchIcon fontSize="large" className={classes.icons} /><br/>
                    <span className="icon-tooltiptext">Search</span>
                  </article>
                </ListItemIcon>
              </ListItem>
              <ListItem button key={1} onClick={() => alert('not implemented yet')}>
                <ListItemIcon className={classes.iconContainer}>
                  <article className="icon-tooltip">
                    <ManageAccountsIcon fontSize="large" className={classes.icons} /><br/>
                    <span className="icon-tooltiptext">Account</span>
                  </article>
                </ListItemIcon>
              </ListItem>
          </List>
        </div>
    </Drawer>
    
)}

export default PermMiniDrawerRight;