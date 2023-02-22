import {Box} from '@mui/material';
import Header from '../../components/Header';

export function Dashboard () {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your page" />
      </Box>
    </Box>
  );
}