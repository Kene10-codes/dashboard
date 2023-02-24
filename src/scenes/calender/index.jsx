import {useState} from 'react';
import FullCalender from '@fullcalendar/react';
import {formatDate} from '@fullcalendar/core';
import daygrid from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
import list from '@fullcalendar/list';
import interaction from '@fullcalendar/interaction';

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

export function Calender () {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState ([]);

  function handleDateClick (selected) {
    console.log (selected);

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
          <Typography variant="h5">Events</Typography>
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
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {
                        (formatDate (event.start), {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      }
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDER */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalender
            height="75vh"
            plugins={[daygrid, timegrid, interaction, list]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={events => setCurrentEvents (events)}
            // initialEvents={[
            //   {
            //     id: '1235',
            //     title: 'Traveling to North',
            //     date: '2022-0-14',
            //   },
            //   {
            //     id: '4321',
            //     title: 'All day event',
            //     date: '2022-09-14',
            //   },
            // ]}
          />
        </Box>
      </Box>
    </Box>
  );
}
