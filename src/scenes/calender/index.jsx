import {useState} from 'react';
import FullCalender, {formDate} from '@fullcalendar/react';
import {daygrid, timegrid, list, interaction} from '@fullcalendar';
import {
  Box,
  List,
  ListItemText,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import Header from '../../components/Header';
import {tokens} from '../../context/theme';

export default function Calender () {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState ([]);

  function handleDateClick (selected) {
    const title = prompt ('Please enter a new title for your event');
    const calenderApi = selected.view.calender;
    calenderApi.unselect ();

    if (title) {
      calenderApi.addEvent ({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }

  function handleEventClick (selected) {
    if (window.confirm ('Are you sure that you want to delete the event?')) {
      selected.event.remove ();
    }
  }
  return (
    <Box m="20px">
      <Header title="CALENDER" subtitle="Full Calender Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDER SIDEBAR */}
        <Box
          flex="1 1 20%"
          borderRadius="4px"
          p="15px"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5">H</Typography>
          <List>
            {currentEvents.map (event => (
              <ListItem
                key={event.id}
                sx={{
                  backgrounColor: `${colors.greenAccent[500]}`,
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText>
                  hi
                </ListItemText>
                hi
              </ListItem>
            ))}
          </List>
        </Box>

      </Box>
      h1
    </Box>
  );
}
