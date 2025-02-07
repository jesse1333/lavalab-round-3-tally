import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'transparent',
  boxShadow: 'none',

  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={toggleDrawer}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                <Image
                  src="/assets/sidebar.png"
                  alt="sidebar"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Tally"
                sx={{
                  color: '#444EAA',
                  fontFamily: "Uncut Sans",
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        {/* Initial Options */}
        <List>
          {['Materials', 'Products', 'Fulfillment'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {text === 'Materials' && (
                    <Image
                      src="/assets/materials.svg"
                      alt="Sidebar Icon"
                      width={24}
                      height={24}
                    />
                  )}
                  {text === 'Products' && (
                    <Image
                      src="/assets/products.svg"
                      alt="Sidebar Icon"
                      width={24}
                      height={24}
                    />
                  )}
                  {text === 'Fulfillment' && (
                    <Image
                      src="/assets/fulfillment.svg"
                      alt="Fulfillment Icon"
                      width={24}
                      height={24}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: '#808080',
                    fontFamily: "Uncut Sans",
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* Integrations */}
        <List>
          {['Integerations'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <Image
                    src="/assets/integrations.svg"
                    alt="Integrations Icon"
                    width={24}
                    height={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: '#808080',
                    fontFamily: "Uncut Sans",
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Logout */}
        <List sx={{ marginTop: open ? "130%" : "450%" }}>
            <ListItem key="logout" disablePadding sx={{ display: 'block' }}>
               <ListItemButton
                  sx={[
                     {
                     minHeight: 48,
                     px: 2.5,
                     },
                     open
                     ? {
                           justifyContent: 'initial',
                        }
                     : {
                           justifyContent: 'center',
                        },
                  ]}
               >
               <ListItemIcon
                  sx={[
                  {
                     minWidth: 0,
                     justifyContent: 'center',
                     ml: open ? -1 : 0,

                  },
                  open
                     ? {
                        mr: 3,
                        }
                     : {
                        mr: 'auto',
                        },
                  ]}
               >
                  <Image
                  src="/assets/logout.svg"
                  alt="Logout Icon"
                  width={40}
                  height={40}
                  />
               </ListItemIcon>
               <ListItemText
                  primary="Logout"
                  sx={{
                  color: '#A20F0F',
                  fontFamily: "Uncut Sans",
                  opacity: open ? 1 : 0,
                  ml: open ? -1 : 0,
                  }}
               />
               </ListItemButton>
            </ListItem>
            
            {/* Profile */}
            <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
               <ListItemButton
                  sx={[
                     {
                        minHeight: 48,
                        px: 2.5,
                        pointerEvents: 'none', 
                     },
                     open
                        ? {
                           justifyContent: 'initial',
                        }
                        : {
                           justifyContent: 'center',
                        },
                  ]}
               >
                  <ListItemIcon
                     sx={[
                        {
                           minWidth: 0,
                           justifyContent: 'center',
                           ml: open ? -1 : 0,
                           ...(open ? {} : { 
                              position: 'relative', 
                              right: -65  
                           }),
                        },
                        open
                           ? {
                              mr: 3,
                           }
                           : {
                              mr: 'auto',
                           },
                     ]}
                  >
                     <Image
                        src="/assets/pfp.jpg"
                        alt="pfp"
                        width={40}
                        height={40}
                        style={{ 
                           borderRadius: '50%' 
                        }}
                     />
                  </ListItemIcon>

                  <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                           variant="body1"
                           sx={{
                              color: 'black',
                              fontFamily: "Uncut Sans",
                              fontWeight: "600",
                              opacity: open ? 1 : 0,
                              ml: open ? -1 : 0,
                           }}
                        >
                           Don't Ruin It
                        </Typography>
                     
                        <Typography
                           variant="body2" 
                           sx={{
                              color: '#808080',
                              fontFamily: "Uncut Sans",
                              fontSize: '12px',
                              opacity: open ? 1 : 0,
                              ml: open ? -1 : 0,
                           }}
                        >
                           Pro Crafter
                        </Typography>
                     </Box>

                     <IconButton sx={{ pointerEvents: 'auto', marginLeft: '23px' }}>
                        <Image
                           src="/assets/dotdot.png"
                           alt="dot-dot-dot"
                           width={30} 
                           height={30}
                        />
                     </IconButton>

                  </Box> 
               </ListItemButton>
            </ListItem>
         </List>
      </Drawer>
    </Box>
  );
}

