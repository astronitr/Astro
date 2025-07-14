import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Divider, Grid, GridItem, HStack, Heading, Hide, Image, Show, Table, TableContainer, Tbody, Td, Text, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ParticlesBg from './ParticlesBg'
import './Home.css'
import '../Font/Anxiety.ttf'
import '../Font/Solaris.ttf'
import '../Font/ExodusDemo-Sharpen.otf'
import { Link } from 'react-router-dom'
import './Astronomica.css'
import logo from '../assets/logo.png';
import Brochure from '../assets/Brochure.pdf'
import Guideline from '../assets/Guidelines.pdf'
import poster from '../assets/Astronomica Poster.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/mg3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import Nav from './Nav'

const Astronomica = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  // const bgChange1 = () => {
  //   const bttn = document.getElementById('bttn1');
  //   bttn.style.backgroundColor = 'rgb(236, 159, 208)';
  // }
  // const bgChange2 = () => {
  //   const bttn = document.getElementById('bttn2');
  //   bttn.style.backgroundColor = 'rgb(236, 159, 208)';
  // }

  // const bgChange3 = () => {
  //   const bttn = document.getElementById('bttn3');
  //   bttn.style.backgroundColor = 'rgb(236, 159, 208)';
  // }

  // const bgChange4 = () => {
  //   const bttn = document.getElementById('bttn4');
  //   bttn.style.backgroundColor = '#c58d58';
  // }

  return (
    <div>
      <Show above='md'>
        <Nav />
        <div className='hero'>
          <Image width={'150px'} src={logo} />
          {/* <Heading className='astro' fontSize={['', '', '4xl', '5xl']} fontFamily='HAZMAT-Regular' fontWeight={'100'} color={'#f1edd2'}>Astro<span style={{ color: '#674dff' }}>NITR</span></Heading> */}
          <Heading size='2xl' color={'#f5e5ff'} fontWeight={'500'} fontFamily={'ExodusDemo-Sharpen'}>Explore the Cosmos</Heading>
          <Heading size='2xl' color={'#EC9FD0'} fontFamily='ExodusDemo-Sharpen' fontWeight={'100'}>Astronomica</Heading>
          <Link to={"https://forms.gle/ua7yHvYbnqZTU9uf6"} target="_blank">
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Register
              </span>
            </button>
          </Link>
        </div>

        <div className='box'>
          <div className="section-subtitle">
            ASTRONOMICA
          </div>
          <div className="section-title">
            Details
          </div>
          <div className='section-backtitle'>
            Details
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-4/5 flex justify-center items-center gap-10'>
            <div className='w-full'>
              <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>Welcome to the spectacular Astronomica 3.0, the annual cosmic extravaganza hosted by AstroNITR, promising an unparalleled odyssey through the cosmos for young enthusiasts! Calling all budding stargazers in grades 10 and 12 to join us for an exhilarating journey into the depths of space. Prepare yourselves for an array of captivating events including a stellar quiz round, captivating documentaries on celestial marvels, engaging recreational activities, telescope adventures, observation sessions, and more!</Text>
            </div>
            <div className='w-1/4'>
              <Image src={poster} />
            </div>
          </div>
        </div>

        <div className='box'>
          <div className="section-subtitle">
            ASTRONOMICA
          </div>
          <div className="section-title">
            Events
          </div>
          <div className='section-backtitle'>
            Events
          </div>
        </div>

        <div className='flex justify-center pb-16'>
          <div className='w-4/5'>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Cosmic Prelude and Celestial Challenge</span>: Easy yet engaging general astronomy quiz, serving as the Preliminary Round</Text>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Galactic Chronicles</span>: Immerse yourself in an enthralling documentary session that will transport you across the vast expanse of space.</Text>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Cosmic Revelry</span>: Get ready to indulge in some pre-treasure hunt fun! Following the competitive excitement, we've lined up a series of enjoyable activities where you can score goodies and treasure trinkets. But shh, it's a surprise!</Text>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Stellar Quest</span>: Following the mesmerizing documentary, get ready to embark on a thrilling astronomical treasure hunt! This one-of-a-kind adventure will challenge you to unravel astronomy-themed riddles and puzzles, uncovering fascinating insights into the universe with each clue solved.</Text>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Telescope Expedition</span>: Step into the world of celestial wonders with our telescope session, where you'll journey through the cosmos guided by our expert astronomers.</Text>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Celestial Observation</span>: Now that you've mastered telescope handling, it's time for the eagerly awaited observation session - hip, hip, hooray! We'll delve into the fascinating realm of solar observations, exploring topics like the sun, solar flares, sun filters, and much more.</Text>
            <Text color={'#f1edd2'} fontSize={['', '', '1rem', '1.2rem']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Prize Distribution Ceremony</span>: Celebrate excellence at our prestigious prize distribution ceremony, where accolades await the brightest minds. Among the coveted rewards is a state-of-the-art telescope, alongside two cutting-edge science gadgets.</Text>
          </div>
        </div>

        <div className='flex justify-center gap-8 pb-16'>
          <a href={Brochure} download>
            <Text color={'#f1edd2'} fontSize={['', '', '1.1rem', '1.3rem']}>&#x2022; <span className='bro'>Brochure</span></Text>
          </a>
          <a href={Guideline} download>
            <Text color={'#f1edd2'} fontSize={['', '', '1.1rem', '1.3rem']}>&#x2022; <span className='bro'>Guideline</span></Text>
          </a>
        </div>


        <div className="bg">
          <p>FOR ANY QUERIES</p>
          <h1>Contact us</h1>
          <Link to={'/contact'}>
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Contact
              </span>
            </button>
          </Link>

        </div>
        <div className='box'>
          <div className="section-subtitle">
            ASTRONOMICA
          </div>
          <div className="section-title">
            Gallery
          </div>
          <div className='section-backtitle'>
            Gallery
          </div>
        </div>
        <div className='con'>
          <div className="photo-gallery">
            <div className="column">
              <div className="photo">
                <img src={img3} alt="" />
              </div>
              <div className="photo">
                <img src={img4} alt="" />
              </div>
              <div className="photo">
                <img src={img7} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="photo">
                <img src={img2} alt="" />
              </div>
              <div className="photo">
                <img src={img5} alt="" />
              </div>
              <div className="photo">
                <img src={img6} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="photo">
                <img src={img1} alt="" />
              </div>
              <div className="photo">
                <img src={img8} alt="" />
              </div>
              <div className="photo">
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Show>
      <Hide above='md'>
        <Nav />
        {/* <ParticlesBg /> */}

        <div className='hero'>
          <Heading className='astro' fontSize={['2xl', '3xl', '', '']} fontFamily='HAZMAT-Regular' fontWeight={'100'} color={'#f1edd2'}>Astro<span style={{ color: '#674dff' }}>NITR</span></Heading>
          <Heading size={['md', 'lg', '', '']} color={'#f5e5ff'} fontWeight={'500'} fontFamily={'ExodusDemo-Sharpen'}>Explore the Cosmos</Heading>
          <Heading size={['md', 'lg', '', '']} color={'#EC9FD0'} fontFamily='ExodusDemo-Sharpen' fontWeight={'100'}>Astronomica</Heading>
          <Link to={"https://forms.gle/ua7yHvYbnqZTU9uf6"} target="_blank">
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Register
              </span>
            </button>
          </Link>
        </div>

        <div className='box'>
          <div className="section-subtitle">
            ASTRONOMICA
          </div>
          <div className="section-title">
            Details
          </div>
          <div className='section-backtitle'>
            Details
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-full flex flex-col justify-center items-center gap-10'>
            <div className='w-1/3'>
              <Image src={poster} />
            </div>
            <div className='w-10/12'>
              <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>Welcome to the spectacular Astronomica 3.0, the annual cosmic extravaganza hosted by AstroNITR, promising an unparalleled odyssey through the cosmos for young enthusiasts! Calling all budding stargazers in grades 10 and 12 to join us for an exhilarating journey into the depths of space. Prepare yourselves for an array of captivating events including a stellar quiz round, captivating documentaries on celestial marvels, engaging recreational activities, telescope adventures, observation sessions, and more!</Text>
            </div>

          </div>
        </div>

        <div className='box'>
          <div className="section-subtitle">
            ASTRONOMICA
          </div>
          <div className="section-title">
            Events
          </div>
          <div className='section-backtitle'>
            Events
          </div>
        </div>

        <div className='flex justify-center pb-16'>
          <div className='w-10/12'>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Cosmic Prelude and Celestial Challenge</span>: Easy yet engaging general astronomy quiz, serving as the Preliminary Round</Text>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Galactic Chronicles</span>: Immerse yourself in an enthralling documentary session that will transport you across the vast expanse of space.</Text>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Cosmic Revelry</span>: Get ready to indulge in some pre-treasure hunt fun! Following the competitive excitement, we've lined up a series of enjoyable activities where you can score goodies and treasure trinkets. But shh, it's a surprise!</Text>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Stellar Quest</span>: Following the mesmerizing documentary, get ready to embark on a thrilling astronomical treasure hunt! This one-of-a-kind adventure will challenge you to unravel astronomy-themed riddles and puzzles, uncovering fascinating insights into the universe with each clue solved.</Text>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Telescope Expedition</span>: Step into the world of celestial wonders with our telescope session, where you'll journey through the cosmos guided by our expert astronomers.</Text>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Celestial Observation</span>: Now that you've mastered telescope handling, it's time for the eagerly awaited observation session - hip, hip, hooray! We'll delve into the fascinating realm of solar observations, exploring topics like the sun, solar flares, sun filters, and much more.</Text>
            <Text color={'#f1edd2'} fontSize={['0.75rem', '0.75rem', '', '']} className='txting'>&#x2022;<span style={{ color: '#674dff', fontWeight: '500' }}> Prize Distribution Ceremony</span>: Celebrate excellence at our prestigious prize distribution ceremony, where accolades await the brightest minds. Among the coveted rewards is a state-of-the-art telescope, alongside two cutting-edge science gadgets.</Text>
          </div>
        </div>

        <div className='flex justify-center gap-8 pb-16'>
          <a href={Brochure} download>
            <Text color={'#f1edd2'} fontSize={['', '', '1.1rem', '1.3rem']}>&#x2022; <span className='bro'>Brochure</span></Text>
          </a>
          <a href={Guideline} download>
            <Text color={'#f1edd2'} fontSize={['', '', '1.1rem', '1.3rem']}>&#x2022; <span className='bro'>Guideline</span></Text>
          </a>
        </div>

        <div className="bg">
          <p>FOR ANY QUERIES</p>
          <h1>Contact us</h1>
          <Link to={"/contact"}>
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Contact
              </span>
            </button>
          </Link>

        </div>
        <div className='box'>
          <div className="section-subtitle">
            ASTRONOMICA
          </div>
          <div className="section-title">
            Gallery
          </div>
          <div className='section-backtitle'>
            Gallery
          </div>
        </div>
        <div className='con'>
          <div className="photo-gallery">
            <div className="column">
              <div className="photo">
                <img src={img3} alt="" />
              </div>
              <div className="photo">
                <img src={img4} alt="" />
              </div>
              <div className="photo">
                <img src={img7} alt="" />
              </div>
              <div className="photo">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="photo">
                <img src={img2} alt="" />
              </div>
              <div className="photo">
                <img src={img5} alt="" />
              </div>
              <div className="photo">
                <img src={img6} alt="" />
              </div>
              <div className="photo">
                <img src={img8} alt="" />
              </div>
              <div className="photo">
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
        </div>

      </Hide>
    </div>
  )
}

export default Astronomica