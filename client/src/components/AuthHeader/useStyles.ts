import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {},
  accAside: {
    fontSize: 14,
    color: '#b0b0b0',
    fontWeight: 900,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  space: {
    paddingRight: '10px',
  },
}));

export default useStyles;
