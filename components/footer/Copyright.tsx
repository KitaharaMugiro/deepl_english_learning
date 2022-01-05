import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
export function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://twitter.com/yuno_miyako2">
                Englister
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
