import {useState} from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from 'react-router-dom';
import {tokens} from '../../context/theme';
import {MenuOpenOutlined} from '@mui/icons-material';

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
      <ProSidebar>
        <Menu>
          <MenuItem>
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
        </Menu>
      </ProSidebar>
    </Box>
  );
}
