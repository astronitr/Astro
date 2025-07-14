import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, HStack, Heading, Hide, Image, Show, Table, TableContainer, Tbody, Td, Text, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ParticlesBg from './ParticlesBg'
import './Home.css'
import './Calendar.css'
import './AstroGallery.css'
import '../Font/Anxiety.ttf'
import '../Font/Solaris.ttf'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import Nav from './Nav'

const Articles = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <div>
            <Show above='md'>
                <Nav />

                <ParticlesBg />
                <div style={{
                    height: '100vh'
                }}>
                    <div className="containr">
                        <h1 className='h1'><span className='span'></span></h1>
                        <div className="load"></div>

                    </div>
                </div>

            </Show>
            <Hide above='md'>
                {/* <div style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: 'linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)',
                    position: 'fixed',
                    zIndex: '999',
                }}>
                    <Button bgColor='#674dff' padding={'0'} borderRadius={'full'} _hover={{ backgroundColor: '#6247ff' }} onClick={onOpen}>
                        <HiOutlineMenuAlt1 />
                    </Button>
                    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent backgroundColor={'#6c52ff'}>
                            <DrawerBody display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'3'} >
                                <div className='navtext3'>
                                    <Text fontSize={'lg'} color={'#f1edd2'}><Link to={'/'}>Home</Link></Text>
                                </div>
                                <div className='navtext3'>
                                    <Text fontSize={'lg'} color={'#f1edd2'}><Link to={'/astronomica'}>Astronomica</Link></Text>
                                </div>
                                <div className='navtext4'>
                                    <Text fontSize={'lg'} color={'#f1edd2'}><Link to={'/members'}>Team</Link></Text>
                                </div>
                                <div className='navtext5'>
                                    <Text fontSize={'lg'} color={'#f1edd2'}><Link to={'/astrogallery'}>Astro-Gallery</Link></Text>
                                </div>
                                <div className='navtext1' style={{
                                    paddingTop: '.25rem',
                                    paddingBottom: '.25rem',
                                    background: 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))',
                                    border: '2px solid rgba(255, 255, 255, .2)',
                                    backdropFilter: 'blur(1rem)',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                }}>
                                    <Text fontSize={'lg'} color={'#f1edd2'}><Link to={'/articles'}>Articles</Link></Text>
                                </div>
                                <div className='navtext8'>
                                    <Text fontSize={'lg'} color={'#f1edd2'}><Link to={'/contact'}>Contact Us</Link></Text>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div> */}
                <Nav />
                <ParticlesBg />
                <div style={{
                    height: '100vh'
                }}>
                    <div className="containr">
                        <h1 className='h1'><span className='span'></span></h1>
                        <div className="load"></div>

                    </div>
                </div>
            </Hide>
        </div>
    )
};

export default Articles;