import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import {tokens} from '../../context/theme';

export function FAQ () {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Important Question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Important Question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Important Question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Important Question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Important Question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
              Lorem ipsum  iciise.  Lorem ipsum  iciise. Lorem ipsum  iciise.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
}
