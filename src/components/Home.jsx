import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, HStack, Heading, Hide, Image, Show, Table, TableContainer, Tbody, Td, Text, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ParticlesBg from './ParticlesBg'
import Telescope from '../telescope.json'
import Lottie from 'lottie-react'
import './Home.css'
import '../Font/Anxiety.ttf'
import '../Font/Solaris.ttf'
import im from '../assets/4101916.jpg'
import img2 from '../assets/img2.jpg'
import img5 from '../assets/img5.jpg'
import milky from '../assets/milky.jpg'
import contact from '../assets/contact.jpg'
import about from '../assets/about.jpg'
import stellarframe from '../assets/stellar night-01.png'
import talkframe from '../assets/star talks-01.png'
import gazingframe from '../assets/star gazing-01.png'
import workshopframe from '../assets/workshop-01.png'
import webinarframe from '../assets/webinar-01.png'
import astroframe from '../assets/astrophotography-01.png'
import photostellar from '../assets/stellar pic-01.png'
import phototalk from '../assets/star talks pic-01.png'
import photogazing from '../assets/star gazing pic-01.png'
import photoworkshop from '../assets/workshop pic-01.png'
import photoastro from '../assets/astrophoto pic-01.png'
import photowebinar from '../assets/webinar pic-01.png'
import bgvideo from '../assets/blackhole.mp4'
import { Link } from 'react-router-dom'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Nav from './Nav'

const Targ = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-2 transition-colors duration-500 hover:border-neutral-50 md:py-8"
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="hed relative z-10 block text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                {/* <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
                    {subheading}
                </span> */}
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};

const Home = () => {
    const MotionImage = motion(Image)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    const bgChange1 = () => {
        const bttn = document.getElementById('bttn1');
        bttn.style.backgroundColor = 'rgb(103, 77, 255)';
    }

    return (
        <div>
            <Show above='md'>
                <Nav />
                <ParticlesBg />
                <div className='h-screen flex flex-col justify-center items-center'>
                    <div className='telescope px-10'>
                        <div style={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <Heading className='astro' fontSize={['', '', '4xl', '5xl']} fontFamily='ethnocentric' fontWeight={'100'} color={'#f1edd2'}>Astro<span style={{ color: '#674dff' }}>NITR</span></Heading>
                            <Text className='txting' color={'#f1edd2'} fontSize={['', '', 'sm', 'lg']}>Welcome to AstroNITR, the epitome of the astronomical quest at NIT Rourkela. As a cornerstone of the Technical Society and the official Astronomy and Astrophysics club, we offer a sophisticated platform for students dedicated to exploring the cosmos. Boasting exclusive access to cutting-edge telescopic instruments such as the Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerised Telescope, seldom found in academic settings, where we provide unmatched opportunities for rigorous celestial observation and advanced astrophotography. Join us as we embark on a meticulously curated journey, where the intricacies of the cosmos become our focal point, fostering enduring connections with the universe.</Text>
                        </div>
                        <Lottie style={{ width: '40%' }} animationData={Telescope} />
                    </div>

                    {/* <div>
                        <Link to={"https://forms.gle/ua7yHvYbnqZTU9uf6"} target="_blank">
                            <Button variant={'solid'} color={'white'} id='bttn1' className='txting' onClick={bgChange1} fontWeight={'200'} backgroundColor={'rgba(103, 77, 255, 0.5)'} _hover={{ backgroundColor: 'rgb(103, 77, 255)' }} size={['','','md','lg']}>Register For Astronomica</Button>
                        </Link>
                    </div> */}
                </div>

                <div className='flex flex-col justify-center items-center gap-10'>
                    <div className='title text-center w-4/5'>
                        <Heading fontFamily={'ethnocentric'} color={'#f1edd2'} fontWeight={'100'} fontSize={['', '', '3xl', '5xl']}>AstroNITR’s Celestial<span style={{ color: '#674dff' }}> Chronicles</span></Heading>
                        <Divider />
                    </div>
                </div>

                <div className='flex flex-col gap-16 my-16'>
                    <div className='w-full flex justify-center'>
                        <div className='w-1/2 h-full relative'>
                            <Image className='w-full' src={stellarframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>Apart from our exclusive activities AstroNITR  also participates in INNOVISION, the Annual Techno-Management Fest of NIT Rourkela, which also happens to be the largest Tech-Fest in Eastern India, where we organize STELLAR NIGHT which is crowned as a Flagship Event, which gets a footfall of over 2500 space-enthusiasts. An Open Telescopic Session for all the tech-fest participants is planned every year, where they observe celestial bodies including Saturn, Jupiter, Orion Nebula Earth’s own Moon, and much more.</Text>
                            </div>
                        </div>
                        <div className='w-1/5'>
                            <Image className='w-full' src={photostellar} />
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>
                        <div className='w-1/5'>
                            <Image className='w-full' src={phototalk} />
                        </div>
                        <div className='w-1/2 h-full relative'>
                            <Image className='w-full' src={talkframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>AstroNITR also organise Astro Talks during the fest where we invite prominent astrophotographers, influencers, professors, and scientists such as Prathmesh Jaju, Kaushik Bhattacharjee, Abhay Pratap Yadav, and many others to enlighten our participants and give insights on the current and upcoming scenario of Space Science. </Text>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-1/2 h-full relative'>
                            <Image className='w-full' src={gazingframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>At AstroNITR , we curate truly mesmerizing experiences that transcend the ordinary, harnessing the unparalleled capabilities of our two extraordinary telescopes: The Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerized Telescope. Our celestial gatherings promise to leave an indelible mark, inviting you to immerse yourself in the infinite wonders of the cosmos. Amidst the twinkling stars and distant galaxies, our interactive learning sessions offer a captivating journey into the art and science of telescope operation, ensuring that every moment spent with us is as enriching as it is awe-inspiring.</Text>
                            </div>
                        </div>
                        <div className='w-1/5'>
                            <Image className='w-full' src={photogazing} />
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>
                        <div className='w-1/5'>
                            <Image className='w-full' src={photoworkshop} />
                        </div>
                        <div className='w-1/2 h-full relative'>
                            <Image className='w-full' src={workshopframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>One of the most fundamental and quintessential aspects of our club is peer learning and focused analogy. In recent years, our lineup of workshops has been diverse and engaging. Among these, AstroNITR proudly collaborated with the Space Academy to host a Model Rocketry Workshop, offering participants hands-on experience in crafting model rockets with cutting-edge software like SPACECAD and SOLIDWORKS. Additionally, we were honoured to host "Exposure," a session led by the esteemed Master Prathamesh Jaju. Renowned for his amazing moon photography, Master Jaju shared invaluable insights into capturing celestial beauty and elevating images through advanced post-processing techniques.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-1/2 h-full relative'>
                            <Image className='w-full' src={webinarframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>AstroNITR  have organized an array of engaging webinars, featuring captivating talks like "Exploring Multiple Star Systems" with Ayush Moharana, a Ph.D. Scholar at Nicolas Copernicus Astronomical Centre, "Introduction to Gravitational Wave Astronomy" by Dr. Anuj Mishra, a Ph.D. Scholar at Inter-University Centre of Astronomy and Astrophysics, “Astrobiology and Space Medicine” by Deepsundar Sahoo, a graduate of the University of Texas, and "The Birth, Evolution, and Final Fate of Stars" led by our esteemed professor, Dr. Abhay Pratap Yadav, alongside numerous other thought-provoking sessions. Moreover, we've extended invitations to esteemed professors to host an enlightening Astro-talk series titled 'Stellar Odyssey'.</Text>
                            </div>
                        </div>
                        <div className='w-1/5'>
                            <Image className='w-full' src={photowebinar} />
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-1/5'>
                            <Image className='w-full' src={photoastro} />
                        </div>
                        <div className='w-1/2 h-full relative'>
                            <Image className='w-full' src={astroframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>During our celestial observation expeditions, AstroNITR meticulously capture stunning images of celestial phenomena and events, which are subsequently showcased on our website and Instagram platforms. Our gallery features an array of breathtaking photographs, including captures of Saturn, Jupiter, the Moon, and its intricate craters, the Sun with its dynamic sunspots, mesmerizing solar eclipses, the awe-inspiring Orion Nebula, and even the elusive Comet C2022/E3, widely known as the green comet, among numerous others.
                                    To achieve these remarkable images, we utilize cutting-edge equipment, including the Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerized Telescopes, specially tailored for astrophotography. Through advanced techniques such as stacking and processing multiple long and short-exposure images, AstroNITR strive to present a refined and enhanced perspective of these celestial wonders. Join us in exploring the wonders of the universe through our meticulously crafted astrophotography.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="p-4 md:p-8">
                    <div className="mx-auto max-w-5xl">
                        <Targ
                            heading="About"
                            // subheading="Learn what we do here"
                            imgSrc={about}
                            href="#"
                        />
                        <Targ
                            heading="Astronomica"
                            // subheading="We work with great people"
                            imgSrc={img2}
                            href="/astronomica"
                        />
                        <Targ
                            heading="Team"
                            // subheading="Our work speaks for itself"
                            imgSrc={img5}
                            href="/members"
                        />
                        <Targ
                            heading="Community&nbsp;Group"
                            // subheading="We want cool people"
                            imgSrc={milky}
                            href="https://chat.whatsapp.com/IiSG9dYoKSc3dRfeCcSyZP"
                        />
                        <Targ
                            heading="Contact&nbsp;Us"
                            // subheading="Incase you're bored"
                            imgSrc={contact}
                            href="/contact"
                        />
                    </div>
                </section>

                <div style={{
                    height: '50px',
                    background: 'linear-gradient(rgba(3, 0, 20,0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0)'
                }}></div>
                <div>
                    <video loop autoPlay muted id='bg-video'>
                        <source src={bgvideo} type="video/mp4" />
                    </video>
                </div>
            </Show>
            <Hide above='md'>
                <Nav />
                {/* <ParticlesBg /> */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '2.25rem'
                }}>
                    <Heading className='astro' fontFamily='ethnocentric' fontWeight={'500'} color={'#f1edd2'} fontSize={['3xl', '4xl', '', '']}>Astro<span style={{ color: '#674dff' }}>NITR</span></Heading>
                    <Lottie style={{ width: '60%' }} animationData={Telescope} />
                    <div style={{
                        width: '90%',
                    }}>
                        <Text fontWeight={'400'} className='text txting' color={'#f1edd2'} fontSize={['sm', 'lg', '', '']}>Welcome to AstroNITR, the epitome of the astronomical quest at NIT Rourkela. As a cornerstone of the Technical Society and the official Astronomy and Astrophysics club, we offer a sophisticated platform for students dedicated to exploring the cosmos. Boasting exclusive access to cutting-edge telescopic instruments such as the Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerised Telescope, seldom found in academic settings, where we provide unmatched opportunities for rigorous celestial observation and advanced astrophotography. Join us as we embark on a meticulously curated journey, where the intricacies of the cosmos become our focal point, fostering enduring connections with the universe.</Text>
                        <div className='text-center mt-8'>
                            <Link to={"https://forms.gle/ua7yHvYbnqZTU9uf6"} target="_blank">
                                <Button variant={'solid'} color={'white'} id='bttn1' className='txting' onClick={bgChange1} fontWeight={'200'} backgroundColor={'rgba(103, 77, 255, 0.5)'} _hover={{ backgroundColor: 'rgb(103, 77, 255)' }} size={['sm','md','','']}>Register For Astronomica</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-16'>
                    <div className='text-center w-4/5'>
                        <Heading className='title' fontFamily={'ethnocentric'} color={'#f1edd2'} fontWeight={'100'} fontSize={['xl', '2xl', '', '']}>AstroNITR’s Celestial<span style={{ color: '#674dff' }}> Chronicles</span></Heading>
                        <Divider />
                    </div>
                </div>

                <div className='flex flex-col gap-16 my-16'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-2/5'>
                            <Image className='w-full' src={photostellar} />
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='w-full' src={stellarframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>Apart from our exclusive activities AstroNITR  also participates in INNOVISION, the Annual Techno-Management Fest of NIT Rourkela, which also happens to be the largest Tech-Fest in Eastern India, where we organize STELLAR NIGHT which is crowned as a Flagship Event, which gets a footfall of over 2500 space-enthusiasts. An Open Telescopic Session for all the tech-fest participants is planned every year, where they observe celestial bodies including Saturn, Jupiter, Orion Nebula Earth’s own Moon, and much more.</Text>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-2/5'>
                            <Image className='w-full' src={phototalk} />
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='w-full' src={talkframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>AstroNITR also organise Astro Talks during the fest where we invite prominent astrophotographers, influencers, professors, and scientists such as Prathmesh Jaju, Kaushik Bhattacharjee, Abhay Pratap Yadav, and many others to enlighten our participants and give insights on the current and upcoming scenario of Space Science. </Text>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-2/5'>
                            <Image className='w-full' src={photogazing} />
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='w-full' src={gazingframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>At AstroNITR , we curate truly mesmerizing experiences that transcend the ordinary, harnessing the unparalleled capabilities of our two extraordinary telescopes: The Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerized Telescope. Our celestial gatherings promise to leave an indelible mark, inviting you to immerse yourself in the infinite wonders of the cosmos. Amidst the twinkling stars and distant galaxies, our interactive learning sessions offer a captivating journey into the art and science of telescope operation, ensuring that every moment spent with us is as enriching as it is awe-inspiring.</Text>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-2/5'>
                            <Image className='w-full' src={photoworkshop} />
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='w-full' src={workshopframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>One of the most fundamental and quintessential aspects of our club is peer learning and focused analogy. In recent years, our lineup of workshops has been diverse and engaging. Among these, AstroNITR proudly collaborated with the Space Academy to host a Model Rocketry Workshop, offering participants hands-on experience in crafting model rockets with cutting-edge software like SPACECAD and SOLIDWORKS. Additionally, we were honoured to host "Exposure," a session led by the esteemed Master Prathamesh Jaju. Renowned for his amazing moon photography, Master Jaju shared invaluable insights into capturing celestial beauty and elevating images through advanced post-processing techniques.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-2/5'>
                            <Image className='w-full' src={photowebinar} />
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='w-full' src={webinarframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>AstroNITR  have organized an array of engaging webinars, featuring captivating talks like "Exploring Multiple Star Systems" with Ayush Moharana, a Ph.D. Scholar at Nicolas Copernicus Astronomical Centre, "Introduction to Gravitational Wave Astronomy" by Dr. Anuj Mishra, a Ph.D. Scholar at Inter-University Centre of Astronomy and Astrophysics, “Astrobiology and Space Medicine” by Deepsundar Sahoo, a graduate of the University of Texas, and "The Birth, Evolution, and Final Fate of Stars" led by our esteemed professor, Dr. Abhay Pratap Yadav, alongside numerous other thought-provoking sessions. Moreover, we've extended invitations to esteemed professors to host an enlightening Astro-talk series titled 'Stellar Odyssey'.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-2/5'>
                            <Image className='w-full' src={photoastro} />
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='w-full' src={astroframe} />
                            <div className='absolute w-full h-full top-0 px-8 flex items-center'>
                                <Text color={'#f1edd2'} className='txting txt'>During our celestial observation expeditions, AstroNITR meticulously capture stunning images of celestial phenomena and events, which are subsequently showcased on our website and Instagram platforms. Our gallery features an array of breathtaking photographs, including captures of Saturn, Jupiter, the Moon, and its intricate craters, the Sun with its dynamic sunspots, mesmerizing solar eclipses, the awe-inspiring Orion Nebula, and even the elusive Comet C2022/E3, widely known as the green comet, among numerous others.
                                    To achieve these remarkable images, we utilize cutting-edge equipment, including the Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerized Telescopes, specially tailored for astrophotography. Through advanced techniques such as stacking and processing multiple long and short-exposure images, AstroNITR strive to present a refined and enhanced perspective of these celestial wonders. Join us in exploring the wonders of the universe through our meticulously crafted astrophotography.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="p-4 md:p-8">
                    <div className="mx-auto max-w-5xl">
                        <Targ
                            heading="About"
                            // subheading="Learn what we do here"
                            imgSrc={about}
                            href="#"
                        />
                        <Targ
                            heading="Astronomica"
                            // subheading="We work with great people"
                            imgSrc={img2}
                            href="/astronomica"
                        />
                        <Targ
                            heading="Team"
                            // subheading="Our work speaks for itself"
                            imgSrc={img5}
                            href="/members"
                        />
                        <Targ
                            heading="Community&nbsp;Group"
                            // subheading="We want cool people"
                            imgSrc={milky}
                            href="https://chat.whatsapp.com/IiSG9dYoKSc3dRfeCcSyZP"
                        />
                        <Targ
                            heading="Contact&nbsp;Us"
                            // subheading="Incase you're bored"
                            imgSrc={contact}
                            href="/contact"
                        />
                    </div>
                </section>
                <div style={{
                    height: '50px',
                    background: 'linear-gradient(rgba(3, 0, 20,0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0)'
                }}></div>
                <div className='bg' style={{
                    // height: '80vh'
                }}>
                    <video loop autoPlay muted id='bg-video'>
                        <source src={bgvideo} type="video/mp4" />
                    </video>
                </div>
            </Hide>
        </div>
    )
}

export default Home