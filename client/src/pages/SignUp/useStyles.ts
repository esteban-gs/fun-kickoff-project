import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '70vh',
    maxHeight: '90%',
    paddingTop: 23,
  },
  welcome: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 1000,
  },
}));

export default useStyles;
