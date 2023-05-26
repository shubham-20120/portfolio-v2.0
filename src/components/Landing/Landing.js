import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import Scroll from 'react-scroll';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/ThemeContext';
import {headerData} from '../../data/headerData'
import { socialsData } from '../../data/socialsData';
import './Landing.css';
import {FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from 'react-icons/fa';

const ScrollLink = Scroll.Link;



export default function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.buttonColor,
                color: theme.secondary,
                border: `3px solid ${theme.buttonColor}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing' id='home' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social linkedin-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.mail && (
                            <a
                                href={`mailto:${socialsData.mail}?subject = Hey Buddy!! Connecting in regards of ...`}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaEnvelope
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='email'
                                />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='instagram'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Full Stack Web Developer',
                                'Mobile App Developer',
                                'Trading strategies backtester',
                                'Entrepreneurial Minded'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            <ScrollLink
                                to='contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}