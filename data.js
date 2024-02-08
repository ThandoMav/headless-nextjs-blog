// import images
import FacebookIcon from './assets/img/copyright/facebook.svg';
import TwitterIcon from './assets/img/copyright/twitter.svg';
import LinkedinIcon from './assets/img/copyright/linkedin.svg';
import LogoImg from './assets/img/header/logo.svg';

export const header = {
    logo: LogoImg,
    btnText: 'Contact',
};

export const footer = {
    logo: LogoImg,
    links: [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/' },
        { name: 'Careers', href: '/' },
        { name: 'Pricing', href: '/' },
        { name: 'Features', href: '/' },
        { name: 'Blog', href: '/' },
    ],
    legal: [
        { name: 'Terms of use', href: '/' },
        { name: 'Terms of conditions', href: '/' },
        { name: 'Privacy policy', href: '/' },
        { name: 'Cookie policy', href: '/' },
    ],
    newsletter: {
        title: 'Newsletter',
        subtitle: 'Over 25000 people have subscribed',
    },
    form: {
        placeholder: 'Enter your email',
        btnText: 'Subscribe',
        smallText: 'We don’t sell your email and spam',
    },
};

export const copyright = {
    link1: {
        name: 'Privacy & Terms',
        href: '/policy',
    },
    link2: {
        name: 'Contact us',
        href: '/',
    },
    copyText: 'Copyright @ 2023 StudentFontein',
    social: [
        { icon: FacebookIcon, href: '/' },
        { icon: TwitterIcon, href: '/' },
        { icon: LinkedinIcon, href: '/' },
    ],
};
