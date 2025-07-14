import { Button, Hide, Show, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { CgMenuRight } from "react-icons/cg";

const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div>
            <Show above='md'>
                <div className='w-full flex justify-center gap-10 py-5' style={{
                    background: 'linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.0)',
                    position: 'fixed',
                    zIndex: '999'
                }}>
                    <NavLink
                        to='/'
                        className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                        style={({ isActive }) => {
                            return {
                                background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                            };
                        }}
                    >
                        <Text className='txt2' fontSize={['', '', 'md', 'lg']} color={'#f1edd2'}>Home</Text>
                    </NavLink>
                    <NavLink
                        to='/astronomica'
                        className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                        style={({ isActive }) => {
                            return {
                                background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                            };
                        }}
                    >
                        <Text className='txt2' fontSize={['', '', 'md', 'lg']} color={'#f1edd2'}>Astronomica</Text>
                    </NavLink>
                    <NavLink
                        to='/Members'
                        className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                        style={({ isActive }) => {
                            return {
                                background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                            };
                        }}
                    >
                        <Text className='txt2' fontSize={['', '', 'md', 'lg']} color={'#f1edd2'}>Team</Text>
                    </NavLink>
                    <NavLink
                        to='/astrogallery'
                        className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                        style={({ isActive }) => {
                            return {
                                background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                            };
                        }}
                    >
                        <Text className='txt2' fontSize={['', '', 'md', 'lg']} color={'#f1edd2'}>Gallery</Text>
                    </NavLink>
                    <NavLink
                        to={"https://astronitr.github.io/astronitr/"} target="_blank"
                        className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                        style={({ isActive }) => {
                            return {
                                background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                            };
                        }}
                    >
                        <Text className='txt2' fontSize={['', '', 'md', 'lg']} color={'#f1edd2'}>Blogs</Text>
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                        style={({ isActive }) => {
                            return {
                                background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                            };
                        }}
                    >
                        <Text className='txt2' fontSize={['', '', 'md', 'lg']} color={'#f1edd2'}>Contact Us</Text>
                    </NavLink>
                </div>
            </Show>
            <Hide above='md'>
                <div className='w-full flex justify-end' style={{
                    background: 'linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)',
                    position: 'fixed',
                    zIndex: '999'
                }}>
                    <Button ref={btnRef} onClick={onOpen} background={'transparent'} color={'#f1edd2'} padding={'0'} >
                        <CgMenuRight size={'25px'} />
                    </Button>
                </div>

                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent h={'100%'}>
                        <DrawerCloseButton size={'2xl'} color={'#f1edd2'} top={'4'} right={'4'} />
                        <DrawerBody className='h-full flex flex-col justify-center items-center gap-8 bg-black'>
                            <NavLink
                                to='/'
                                className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                        border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                                    };
                                }}
                            >
                                <Text className='txt1' fontSize={['2xl', '3xl', '', '']} color={'#f1edd2'}>Home</Text>
                            </NavLink>
                            <NavLink
                                to='/astronomica'
                                className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                        border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                                    };
                                }}
                            >
                                <Text className='txt1' fontSize={['2xl', '3xl', '', '']} color={'#f1edd2'}>Astronomica</Text>
                            </NavLink>
                            <NavLink
                                to='/members'
                                className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                        border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                                    };
                                }}
                            >
                                <Text className='txt1' fontSize={['2xl', '3xl', '', '']} color={'#f1edd2'}>Team</Text>
                            </NavLink>
                            <NavLink
                                to='/astrogallery'
                                className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                        border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                                    };
                                }}
                            >
                                <Text className='txt1' fontSize={['2xl', '3xl', '', '']} color={'#f1edd2'}>Gallery</Text>
                            </NavLink>
                            <NavLink
                                to='/articles'
                                className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                        border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                                    };
                                }}
                            >
                                <Text className='txt1' fontSize={['2xl', '3xl', '', '']} color={'#f1edd2'}>Articles</Text>
                            </NavLink>
                            <NavLink
                                to='/contact'
                                className='block py-1 px-4 duration-200 rounded-xl border-2 border-transparent hover:border-[#ffffff33]'
                                style={({ isActive }) => {
                                    return {
                                        background: isActive ? 'linear-gradient(to right bottom, rgb(241, 237, 210, 0.2), rgb(241, 237, 210, 0.1))' : '',
                                        border: isActive ? '2px solid rgba(255, 255, 255, .2)' : '',
                                    };
                                }}
                            >
                                <Text className='txt1' fontSize={['2xl', '3xl', '', '']} color={'#f1edd2'}>Contact Us</Text>
                            </NavLink>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Hide>
        </div>
    )
}

export default Nav