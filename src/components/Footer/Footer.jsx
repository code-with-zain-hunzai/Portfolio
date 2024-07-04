import React from 'react';
import zain from '../../assets/zain.svg'

const Footer = () => {
    return (
        <div className='footer lg:flex flex-col justify-center gap-7'>
            <div className="footer-top lg:flex lg:justify-between">
                <div className="footer-top-left">
                    <img src={zain} alt="zain" />
                    <p className='text-lg lg:max-w-[400px]'>
                        I'm Zain,
                        FrontEnd Developer base on pakistan,I am a FrontEnd Developer from hunza with the 3-4 years of experience.</p>
                </div>
                <div className="footer-top-right lg:flex items-center gap-9">
                    <div className='footer-email-input flex gap-7 px-5 py-4 rounded-full bg-[#32323b] pr-20'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hrjifpbq.json"
                            trigger="hover"
                            colors="primary:#fff">
                        </lord-icon>
                        <input className='outline-none border-none bg-transparent text-[#a0a0a0] font-outfit text-lg hover:border hover:border-white' type="text" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe w-2/4">Subscribe</div>
                </div>
            </div>
            <hr className='text-white' />
            <div className="footer-bottom lg:flex lg:justify-between text-lg">
                <p>&copy; 2024 zain.hunzai All rights reserved</p>
                <div className="footer-bottom-left text-center lg:text-start lg:flex  gap-14 mb-12">
                    <p>Term of Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
