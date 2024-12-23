import React from 'react'
import LowerHeader from '../Includes/LowerHeader'
import HomeForm from './HomeForm'
import Discount_home from './Discount_home'
import Speciality from './Speciality'

export default function HomeHeader() {
    return (
        <>
            <div className="home text-white mb-5">
                <LowerHeader />
                <div className="container d-flex flex-column align-items-center justify-content-center py-4">
                    <p>
                        Call To Order :
                        <span className='main ms-2'>
                            +1844-893-1760
                        </span>
                    </p>
                    <h1 className='mb-3'>
                        Explore Over 10 Million Auto Parts
                    </h1>
                    <h4 className='main'>Select Your Vehicle:
                    </h4>
                    <HomeForm />
                    <Discount_home />
                    <Speciality />
                </div>
            </div>
        </>
    )
}
