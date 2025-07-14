import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, HStack, Heading, Hide, Image, Show, Table, TableContainer, Tbody, Td, Text, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ParticlesBg from './ParticlesBg'
import './Home.css'
// import './Calendar.css'
import '../Font/Anxiety.ttf'
import '../Font/Solaris.ttf'
import { Link } from 'react-router-dom'
import president from '../assets/param president.png'
import vp from '../assets/sujal vice-president.png'
import techH from '../assets/sanjeev tech head.png'
import mH1 from '../assets/ansha ans management and pr head.png'
import mH2 from '../assets/Abhinav management and pr head.png'
import cH from '../assets/sriyanshu creative head.png'
import treasurer from '../assets/sparsh treasurer.png'
import gS from '../assets/rurt gs.png'
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

const Members = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <div>
            <Show above='md'>
                <Nav />
                <ParticlesBg />

                <div className='flex flex-col gap-10 justify-center items-center pt-20'>
                    <div className='w-full text-center'>
                        <Heading fontFamily={'ethnocentric'} fontSize={['', '', '4xl', '5xl']} fontWeight={'100'} color={'#f1edd2'}>Executive<span style={{ color: '#674dff' }}> Body</span></Heading>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-12 justify-center items-center'>
                            <div className='w-1/5'>
                                <Image src={president} />
                            </div>
                            <div className='w-1/5'>
                                <Image src={vp} />
                            </div>
                            <div className='w-1/5'>
                                <Image src={gS} />
                            </div>
                            <div className='w-1/5'>
                                <Image src={treasurer} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-12 justify-center items-center'>
                            <div className='w-1/5'>
                                <Image src={cH} />
                            </div>
                            <div className='w-1/5'>
                                <Image src={mH1} />
                            </div>
                            <div className='w-1/5'>
                                <Image src={mH2} />
                            </div>
                            <div className='w-1/5'>
                                <Image src={techH} />
                            </div>
                        </div>
                    </div>
                </div>

            </Show>
            <Hide above='md'>
                <Nav />
                <div className='flex flex-col gap-10 justify-center items-center pt-12'>
                    <div className='w-full text-center'>
                        <Heading fontFamily={'ethnocentric'} fontSize={['xl', '3xl', '', '']} fontWeight={'100'} color={'#f1edd2'}>Executive<span style={{ color: '#674dff' }}> Body</span></Heading>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-12 justify-center items-center'>
                            <div className='w-2/5'>
                                <Image src={president} />
                            </div>
                            <div className='w-2/5'>
                                <Image src={vp} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-12 justify-center items-center'>
                            <div className='w-2/5'>
                                <Image src={gS} />
                            </div>
                            <div className='w-2/5'>
                                <Image src={treasurer} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-12 justify-center items-center'>
                            <div className='w-2/5'>
                                <Image src={cH} />
                            </div>
                            <div className='w-2/5'>
                                <Image src={mH1} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-12 justify-center items-center'>
                            <div className='w-2/5'>
                                <Image src={mH2} />
                            </div>
                            <div className='w-2/5'>
                                <Image src={techH} />
                            </div>
                        </div>
                    </div>
                </div>
            </Hide>
        </div>
    )
}

export default Members