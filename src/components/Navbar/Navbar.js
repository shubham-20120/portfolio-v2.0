import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import Scroll from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import ChangeTheme from '../../components/ChangeTheme/ChangeTheme';
import './Navbar.css';

const ScrollLink = Scroll.Link;

export default function Navbar() {
    const { theme, setHandleDrawer, changeTheme, isDark } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            // transform: 'translateY(-10px)',
            // backgroundColor: 'blue',
            height: '100%',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            }
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
        pointerCursor: {
            cursor: 'pointer'
        }
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };
    const handleMouseEnter = (e) => {
        e.currentTarget.style.cursor = "pointer";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.cursor = "default";
    };


    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 onClick={()=>{
                    window.open('https://drive.google.com/drive/folders/1a0jlgBT7yjiO4VXfzrlWFREdfaOGRvxU?usp=sharing', '_blank')
                }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ color: theme.primary }}>
                    {shortname(headerData.header)}
                </h1>
                <div className='navbar-right'>
                    <ChangeTheme />
                    <IoMenuSharp
                        className={classes.navMenu}
                        onClick={handleDrawerOpen}
                        aria-label='Menu'
                    />
                </div>
            </div>
            <SwipeableDrawer
                variant='temporary'
                onClose={(_, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem} onClick={()=>{handleDrawerClose()}}>
                                    <IoHomeSharp
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <ScrollLink
                                to='experience'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem} onClick={()=>{handleDrawerClose()}}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Experience
                                    </span>
                                </div>
                            </ScrollLink>
                        </Fade>

                        <Fade left>
                            <ScrollLink
                                to='projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem} onClick={()=>{handleDrawerClose()}}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Projects
                                    </span>
                                </div>
                            </ScrollLink>
                        </Fade>

                        <Fade left>
                            <ScrollLink
                                to='contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem} onClick={()=>{handleDrawerClose()}}>
                                    <MdPhone className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Contact
                                    </span>
                                </div>
                            </ScrollLink>
                        </Fade>

                        <Fade left>
                            <div className={classes.drawerItem} onClick={()=>{window.open('https://drive.google.com/drive/folders/1a0jlgBT7yjiO4VXfzrlWFREdfaOGRvxU?usp=sharing', '_blank')}}>
                                <HiDocumentText
                                    className={classes.drawerIcon}
                                />
                                <span className={classes.drawerLinks}>
                                    <a href='https://drive.google.com/drive/folders/1a0jlgBT7yjiO4VXfzrlWFREdfaOGRvxU?usp=sharing' rel="noreferrer" style={{textDecoration: 'none', color: theme.primary}} target="_blank">
                                        Resume
                                    </a>
                                </span>
                            </div>
                        </Fade>

                        <Fade left>
                            <div className={classes.drawerItem} onClick={()=>{handleDrawerClose(); changeTheme()}}>
                                {isDark ?
                                    <BsFillSunFill className={classes.drawerIcon} />
                                    :
                                    <BsFillMoonFill className={classes.drawerIcon} />
                                }
                                <span className={classes.drawerLinks}>
                                    {
                                        isDark ? "Light" : "Dark"
                                    }
                                </span>
                            </div>
                        </Fade>
                    </div>
                </div>
            </SwipeableDrawer>
        </div>
    );
}