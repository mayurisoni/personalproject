import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { makeStyles } from '@mui/styles';
const drawerWidth = 240;
const navItems = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "About me", id: "about" },
  { name: "Contact me", id: "contact" },
];
const useStyles = makeStyles((theme) => ({
  navButton: {
    color: 'white',
    '&.Mui-selected': {
      backgroundColor: 'Red', // Change this to the desired background color
    },
  },
 
}));
const styles = {
  appBar: {
    backgroundColor: "#00091d",
  },
 
};

const DrawerAppBar=(props)=>{
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const classes = useStyles();

  const handleNavButtonClick = (index) => {
    setSelectedIndex(index);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color="#f5af19"
        variant="h5"
        sx={{ my: 2, fontFamily: "'Nunito Sans', sans-serif" }}
      >
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,i) => {
          console.log(item);
          return (
            <ListItem key={item.name} disablePadding >
            
              <motion.div
             
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 0px rgb(255,255,255)",
                  color: "rgb(184,88,13)",
                }}
              >
                <ListItemButton sx={{ textAlign: "center" }} className={classes.navButton}
            selected={selectedIndex === i}
            onClick={() => handleNavButtonClick(i)}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={700}
                  >
                    <ListItemText primary={item.name} />
                  </Link>
                </ListItemButton>
              </motion.div>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={styles.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="#f5af19"
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontWeight: "700",
                justifyContent: "flex-start",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Portfolio.
            </Typography>
            <Box
              className="navButton"
              sx={{ display: { xs: "none", sm: "flex",md:"flex",lg:"flex" },flexDirection: { md: "row", lg: "row" }, }}
            >
              {navItems.map((item,i) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 0px rgb(255,255,255)",
                  }}
                >
                  <Button
                  className={classes.navButton}
                  selected={selectedIndex === i}
                  onClick={() => handleNavButtonClick(i)}
                    sx={{
                      color: "#fff",
                      padding: "5px 35px",
                      fontWeight: "500",
                      fontFamily: "Calibri",
                    }}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      {/* */}
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
