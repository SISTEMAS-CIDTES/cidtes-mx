import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    IconButton,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/images/header/logo.png";
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "CIDTES", to: "/" },
        { label: "Capacitación", to: "/capacitacion" },
        { label: "Certificación", to: "/certificacion/conocer" },
        { label: "Consultoria", to: "/consultoria" },
        { label: "Investigación Desarrollo", to: "/investigacion-y-desarrollo/1" },
        { label: "Únete", to: "/contacto" },
    ];

    return (
        <header className="header-container">
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.to}>{item.label}</Link>
                ))}
                <IconButton
                    onClick={() => setIsOpen(true)}
                    sx={{
                        transition: 'transform 3s ease',
                        color: '#007BFF'
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </nav>

            <Drawer
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Box sx={{ width: 250 }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setIsOpen(false)}>
                                <ListItemIcon sx={{ color: '#D32F2F' }}>
                                    <CloseIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cerrar" sx={{ color: '#D32F2F' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </header>
    );
};

export default Header;