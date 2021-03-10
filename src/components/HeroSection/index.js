import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    HeroContent,
    ArrowForward,
    ArrowRight,
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>The Future of Wellness</HeroH1>
                <HeroP>
                    We exist for the well-being of the collective. To perpetuate
                    healthy, happy, storied lives, with the good of our planet
                    at the heart of everything we do. No gimmicks, no bullshit,
                    just honest, authentic products that deliver exactly what’s
                    promised.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="/contact"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Contact {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
