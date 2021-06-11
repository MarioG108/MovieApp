import React, { useState, useEffect } from 'react'
import NotFound from '../404'
import Preloader from '../preloader'

import Slider from './slider'
import Swiper from './swiper'
import { GetUpcomming } from '../../Services/apicontroller'

function Upcomming() {
    const [mediainfo, setMediainfo] = useState([{}])
    const [hasError, setHasError] = useState(false)
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        async function load() {
            const response = await GetUpcomming()
            if (response.ok) {
                const details = await response.json()
                setMediainfo(details.results)
                
                setIsloading(false)
            }
            else {
                setHasError(true)
            }

        }
        if (isloading) {
            load()

        }
        console.log("response", mediainfo)

    }, [isloading])
    return (<>{
        hasError ? <NotFound /> :
            isloading ?
                <Preloader /> :
                <Swiper>
                    {
                        mediainfo.map((mov, index) => {
                            return (
                                <Slider {...mov} key={index} />
                            )
                        })
                    }
                </Swiper>
    }</>)
}


export default Upcomming;