import gcp from '../assets/svg/skills/gcp.svg'
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import java from '../assets/svg/skills/java.svg'
import python from '../assets/svg/skills/python.svg'
import ruby from '../assets/svg/skills/ruby.svg'
import aws from '../assets/svg/skills/aws.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import figma from '../assets/svg/skills/figma.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import unity from '../assets/svg/skills/unity.svg'
import rails from '../assets/svg/skills/rails.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import canva from '../assets/svg/skills/canva.svg'
import cpp from '../assets/svg/skills/c++.svg'
import slack from '../assets/svg/skills/slack-new-logo.svg'
import jira from '../assets/svg/skills/jira-1.svg'
import reactNative from '../assets/svg/skills/react.svg'
import pineScript from '../assets/svg/skills/Pine_Script_logo_small.png'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'node.js':
            return nodejs;
        case 'rails':
            return rails;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'c#':
            return csharp;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'aws':
            return aws;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        case 'unity':
            return unity;
        case 'canva':
            return canva;
        case 'c++':
            return cpp;
        case 'jira':
            return jira;
        case 'pine script':
            return pineScript;
        case 'react native':
            return reactNative;
        case 'slack':
            return slack;
        default:
            break;
    }
}
