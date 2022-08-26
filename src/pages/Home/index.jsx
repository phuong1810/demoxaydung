import React from 'react'
import Customer from '../../commons/components/Customer'
import Newletters from '../../commons/components/Newletters'
import SliderSlick from '../../commons/components/Slider'
import AboutTop from '../About/About'
import Project from '../Project'
import Service from '../Service/Service'

export default function Home() {
    return (
        <>
            <SliderSlick />
            <div className='wrap-main w-clear'>
                <AboutTop/>
                <Service/>
                <Project/>
                <Newletters/>
                <Customer/>
            </div>
        </>
    )
}
