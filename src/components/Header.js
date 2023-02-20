import {Box, Typography, useTheme} from '@mui/material';
import {tokens} from '../context/theme';

export default function Header({title, subTitle}) {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{m: '5px 5px 5px 0'}}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>

    </Box>
  );
}
