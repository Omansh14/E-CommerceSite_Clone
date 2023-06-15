import React from 'react';
import FooterMiddleList from './FooterMiddleList';
import {FooterItems} from '../../constants/constants'
import logo from '../../assets/logo.png'
import flag from '../../assets/Indian_Flag.webp'

const FooterMiddle = () =>{

    return(
        <div className="w-full bg-amazon_light text-white">
            {/*==============Top Start Here ==========*/}
            <div className="w-full border-b-[1px] border-gray-500 py-10">
                <div className="max-w-5xl mx-auto text-gray-300">
                    <div className='w-full grid grid-cols-1 md:grid-cols-4 place-items-center items-start'>
                        {
                            FooterItems.map((item) => (
                                <div key={item.id}>
                                    <div className='px-6 w-full flex justify-start items-center text-white'>{item.title}</div>
                                    <FooterMiddleList item={item} />
                                </div>  
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            {/*==============Top End Here ==========*/}
            {/*==============Bottom Start Here ==========*/}
            <div className='w-full flex gap-6 items-center justify-center py-6'>
                <div>
                    <img className='w-20 pt-3' alt='logo' src={logo} />
                </div>
                <div>
                    <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
                </div>
                <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                    <img className='w-6' src={flag} alt='flag'/>
                    <p >India</p>
                </div>
            </div>
            {/*==============Bottom End Here ==========*/}
        </div>
    )
};

export default FooterMiddle; 