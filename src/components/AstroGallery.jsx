import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, HStack, Heading, Hide, Image, Show, Table, TableContainer, Tbody, Td, Text, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ParticlesBg from './ParticlesBg'
import './Home.css'
import '../Font/Anxiety.ttf'
import '../Font/Solaris.ttf'
import astro1 from '../assets/astro1.jpg'
import astro2 from '../assets/astro2.jpg'
import astro3 from '../assets/astro3.jpg'
import astro4 from '../assets/astro4.jpg'
import astro5 from '../assets/astro5.jpg'
import astro6 from '../assets/astro6.jpg'
import astro7 from '../assets/astro7.jpg'
import astro8 from '../assets/astro8.jpg'
import Nav from './Nav'

const AstroGallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <div>
            <Show above='md'>
                <Nav />
                <ParticlesBg />

                <div className='text-center pt-20'>
                    <Heading fontFamily={'ethnocentric'} color={'#f5e5ff'} fontSize={['', '', '4xl', '5xl']} fontWeight={'100'} >Astro<span style={{ color: '#674dff' }}>Gallery</span></Heading>
                </div>

                <div className='con'>
                    <div className="photo-gallery">
                        <div className="column">
                            <div className="photo">
                                <img src={astro4} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro2} alt="" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="photo">
                                <img src={astro3} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro1} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro5} alt="" />
                            </div>
                            {/* <div className="photo">
                                <img src={img6} alt="" />
                            </div> */}
                        </div>
                        <div className="column">
                            <div className="photo">
                                <img src={astro7} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro6} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </Show>
            <Hide above='md'>
                <Nav />
                {/* <ParticlesBg /> */}
                <div className='text-center pt-12'>
                    <Heading fontFamily={'ethnocentric'} color={'#f5e5ff'} fontSize={['xl', '2xl', '', '']} fontWeight={'100'} >Astro<span style={{ color: '#674dff' }}>Gallery</span></Heading>
                </div>

                <div className='con'>
                    <div className="photo-gallery">
                        <div className="column">
                            <div className="photo">
                                <img src={astro1} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro2} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro3} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro7} alt="" />
                            </div>
                        </div>
                        <div className="column">
                            
                            <div className="photo">
                                <img src={astro5} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro6} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro4} alt="" />
                            </div>
                            <div className="photo">
                                <img src={astro8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Hide>
        </div>
    )
}

export default AstroGallery