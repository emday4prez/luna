import React from 'react';
import { LogoBanner, BannerContainer } from './bannerElements';

const Logo = () => {
    return (
        <>
            <BannerContainer>
                <LogoBanner
                    src={require('../../images/logos/luna-labs.png').default}
                    alt={'luna labs company text logo'}
                />
            </BannerContainer>
        </>
    );
};

export default Logo;
