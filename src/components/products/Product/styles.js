import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    minWidth: 550,
  },
  media: {
    height: 100,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));