import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '-50px',
      marginLeft: '5px',
      marginBottom: '5px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px',
      marginRight: '-20px',
    },
    marginLeft: '5px',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));