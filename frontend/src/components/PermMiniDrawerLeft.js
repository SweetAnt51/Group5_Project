import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PieChartTwoTone from '@material-ui/icons/PieChartTwoTone';
import PollTwoTone from '@material-ui/icons/PollTwoTone';
import TableChartTwoTone from '@material-ui/icons/TableChartTwoTone';
import PostAdd from '@material-ui/icons/PostAdd';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';

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
      top:40,
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
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiDrawer-paperAnchorDockedLeft': {
      border: 'none',
      },
    },
    icons: {
      color: '#45464a',
      fill: '#45464a'
    }
  }));
    
    const classes = useStyles()
    const scrollTo = (element) => {
        document.getElementById(element).scrollIntoView()
    }

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
              <ListItem button key={1} onClick={props.toggleDrawer('left', true)}>
                <ListItemIcon >
                  <article className="icon-tooltip">
                    <TuneRoundedIcon className={classes.icons} /><br/>
                    <span className="icon-tooltiptext">Filters</span>
                  </article>
                </ListItemIcon>
              </ListItem>
          </List>
        </div>
    </Drawer>
    
)}

export default PermMiniDrawerRight;