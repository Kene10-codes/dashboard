import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {tokens} from '../../context/theme';
import {
  BarChartOutlined,
  CalendarToday,
  ContactsOutlined,
  HelpOutline,
  HomeOutlined,
  MapOutlined,
  MenuOpenOutlined,
  MenuOutlined,
  PeopleOutline,
  PersonOutline,
  PieChartOutline,
  ReceiptOutlined,
  TimelineOutlined,
} from '@mui/icons-material';
import {Calendar} from '@fullcalendar/core';

function Item({title, to, icon, selected, setSelected}) {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{color: colors.grey[100]}}
      onClick={() => setSelected (title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />

    </MenuItem>
  );
}

export function Sidebar () {
  const theme = useTheme ();
  const colors = tokens (theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState (false);
  const [selected, setSelected] = useState ('Dashboard');

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: `transparent !important`,
        },
        '& .pro-inner-item': {
          padding: '5px 35px 20px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-inner-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed (!isCollapsed)}
            icon={!isCollapsed ? undefined : <MenuOutlined />}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[400],
            }}
          >
            {!isCollapsed &&
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed (!isCollapsed)}>
                  <MenuOpenOutlined />
                </IconButton>
              </Box>}
          </MenuItem>

          {/* USER */}
          {!isCollapsed &&
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src=""
                  width="100px"
                  height="100px"
                  alt="profile-user"
                  style={{cursor: 'pointer', borderRadius: '50%'}}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[400]}
                  fontWeight="bold"
                  sx={{m: '10px 0 0 0'}}
                >
                  Ed Rohr
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile Form"
              to="/profile"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calender"
              to="/calender"
              icon={<CalendarToday />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
