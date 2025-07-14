import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, FormControl, FormLabel, HStack, Heading, Hide, Image, Input, InputGroup, InputRightElement, Show, Stack, Table, TableContainer, Tbody, Td, Text, Textarea, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import ParticlesBg from './ParticlesBg'
import './Home.css'
import './Contact.css'
// import '../Font/Anxiety.ttf'
// import '../Font/Solaris.ttf'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { VscAccount } from "react-icons/vsc";
import { SiMaildotru } from "react-icons/si";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import Nav from './Nav'

const Contact = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById("myBtn").disabled = true;
        document.getElementById("myBtn").innerHTML = "Sending..."

        emailjs.sendForm('service_hnfzfzs', 'template_20nvame', form.current, 'LuycPAJJM3eRwuQim')
            .then((result) => {
                console.log(result.text);
                document.getElementById("myBtn").disabled = false;
                e.target.reset();
                document.getElementById("myBtn").innerHTML = "Send"
                window.alert('Message Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Show above='md'>
                <Nav />
                <ParticlesBg />
                <form ref={form} onSubmit={sendEmail}>
                    <div className='form'>
                        <div className='form-control'>
                            <VStack className='form-order'>
                                <Heading paddingBottom={'1rem'} color={'#f1edd2'}>Contact <span style={{ color: '#674dff' }}>Us</span></Heading>
                                <Stack spacing={'5'} w={'100%'}>
                                    <FormControl>
                                        <InputGroup>
                                            <Input required borderRadius={'full'} color={'#f1edd2'} placeholder='Name' name="user_name" />
                                            <InputRightElement className='icon' bgColor={'#674dff1a'} borderLeft={'2px solid rgba(255, 255, 255, .3)'} borderRightRadius={'full'}>
                                                <VscAccount size={'1.5rem'} color='#674dffa8' />
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup>
                                            <Input required borderRadius={'full'} type='email' color={'#f1edd2'} placeholder='Email' name="user_email" />
                                              <InputRightElement className='icon' bgColor={'#674dff1a'} borderLeft={'2px solid rgba(255, 255, 255, .3)'} borderRightRadius={'full'}>
                                                <AlternateEmailOutlinedIcon sx={{ color: '#674dffa8', fontSize: '1.5rem' }} />
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                    <Textarea required borderRadius={'.75rem'} rows={'4'} color={'#f1edd2'} placeholder='Message' name="message" />
                                    <Button id='myBtn' type="submit" fontWeight={'normal'} variant={'solid'} borderRadius={'full'} bgColor={'#684dff85'} color={'#f1edd2'} _hover={{ backgroundColor: '#684dffd9' }} value="Send">Send</Button>
                                </Stack>

                            </VStack>
                        </div>
                    </div>
                </form>
            </Show>
            <Hide above='md'>
                <Nav />
                {/* <ParticlesBg /> */}
                <div className='form'>
                    <div className='form-control'>
                        <VStack className='form-order' spacing={['1', '']}>
                            <Heading paddingBottom={['0.5rem', '1rem']} color={'#f1edd2'}>Contact <span style={{ color: '#674dff' }}>Us</span></Heading>
                            <Stack spacing={['3', '5']} w={'100%'}>
                                <FormControl>
                                    <InputGroup>
                                        <Input required borderRadius={'full'} color={'#f1edd2'} placeholder='Name' />
                                        <InputRightElement className='icon' bgColor={'#674dff1a'} borderLeft={'2px solid rgba(255, 255, 255, .3)'} borderRightRadius={'full'}>
                                            <VscAccount size={'1.5rem'} color='#674dffa8' />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <Input required borderRadius={'full'} type='email' color={'#f1edd2'} placeholder='Email' />
                                        <InputRightElement className='icon' bgColor={'#674dff1a'} borderLeft={'2px solid rgba(255, 255, 255, .3)'} borderRightRadius={'full'}>
                                            <AlternateEmailOutlinedIcon sx={{ color: '#674dffa8', fontSize: '1.5rem' }} />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Textarea required borderRadius={'.75rem'} rows={'4'} color={'#f1edd2'} placeholder='Message' />
                                <Button fontWeight={'normal'} variant={'solid'} borderRadius={'full'} bgColor={'#684dff85'} color={'#f1edd2'} _hover={{ backgroundColor: '#684dffd9' }}>Send</Button>
                            </Stack>
                        </VStack>
                    </div>
                </div>
            </Hide>
        </div>
    )
}

export default Contact