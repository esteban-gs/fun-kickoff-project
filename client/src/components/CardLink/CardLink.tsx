import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  link: string;
  linkString: string;
  pre?: string;
  post?: string;
}

const CardLink = ({ link, linkString, pre, post }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.root} variant="body1">
        <span className={classes.space}>{pre}</span>
        <span className={classes.space}>
          <Link to={`/${link}`}>{linkString}</Link>
        </span>
        <span>{post}</span>
      </Typography>
    </div>
  );
};

export default CardLink;
