import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Heading, Hide, Image, Show } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <>
            <Show above='md'>
                <div className='footer'>
                    <div className='flex justify-center items-center gap-10'>
                        <Image width={'50px'} src={logo} />
                        <Heading fontFamily='ethnocentric' fontSize={['', '', '3xl', '4xl']} fontWeight={'400'} color={'#f1edd2'}>Astro<span style={{ color: '#674dff' }}>NITR</span></Heading>
                    </div>
                    <div className='footer1'>
                        <a target="_blank" href="https://www.facebook.com/astronitr/"><FaFacebook className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                        <a target="_blank" href="https://www.instagram.com/astro_nitr?igsh=a3ZjcXh2eXVrcjVz"><FaInstagram className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                        <a target="_blank" href="https://x.com/AstroNITR?t=Euj4GOolu1Q-xpgd6H1FIA&s=08 "><FaTwitter className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                        <a target="_blank" href="https://www.linkedin.com/company/astronitr/"><FaLinkedin className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                    </div>
                </div>
            </Show>
            <Hide above='md'>
                <div className='footer2'>
                    <Heading fontSize={['xl', '2xl', '', '']} fontFamily='ethnocentric' fontWeight={'400'} color={'#f1edd2'}>Astro<span style={{ color: '#674dff' }}>NITR</span></Heading>
                    <div className='footer3'>
                        <a target="_blank" href="https://www.facebook.com/astronitr/"><FaFacebook className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                        <a target="_blank" href="https://www.instagram.com/astro_nitr?igsh=a3ZjcXh2eXVrcjVz"><FaInstagram className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                        <a target="_blank" href="https://x.com/AstroNITR?t=Euj4GOolu1Q-xpgd6H1FIA&s=08 "><FaTwitter className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                        <a target="_blank" href="https://www.linkedin.com/company/astronitr/"><FaLinkedin className='icon-background' color='#f1edd2' fontSize={'2rem'} cursor={'pointer'} /></a>
                    </div>
                </div>
            </Hide>
        </>
    )
}

export default Footer