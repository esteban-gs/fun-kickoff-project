import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  login: AuthLinks;
  signUp: AuthLinks;
  asideText: string;
}

interface AuthLinks {
  linkTo: string;
  btnText: string;
}

const AuthFooter = ({ login, signUp, asideText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      p={1}
      sx={{ boxShadow: 2 }}
      display="flex"
      justifyContent="flex-end"
      alignSelf="flex-end"
      paddingRight={5}
      paddingY={6}
      marginBottom={12}
      className={classes.authHeader}
    >
      <Typography className={classes.accAside}>{asideText}</Typography>
      <div className={classes.buttonContainer}>
        <Button component={Link} to={login.linkTo} color="inherit" className={classes.accBtn} variant="outlined">
          {login.btnText}
        </Button>
        <span className={classes.space}></span>
        <Button
          component={Link}
          to={signUp.linkTo}
          color="primary"
          style={{ color: 'white' }}
          className={classes.accBtn}
          variant="contained"
        >
          {signUp.btnText}
        </Button>
      </div>
    </Box>
  );
};

export default AuthFooter;
