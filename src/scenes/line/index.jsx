import {Box} from '@mui/material';
import LineChart from '../../components/LineChart';
import Header from '../../components/Header';

export default function Line () {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
