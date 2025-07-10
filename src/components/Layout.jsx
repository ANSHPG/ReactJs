import React from 'react'
import Card from './Card'

const Layout = () => {
    const card = {
        mclaren: {
            company: 'mclaren',
            accent_color_1: '#ac4b00',
            accent_color_2: '#e06a00',
            driver: ['Oscar Piastri', 'Lando Norris'],
            machine: 'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp'
        },
        ferrari: {
            company: 'ferrari',
            accent_color_1: '#82020c',
            accent_color_2: '#d50e29',
            driver: ['Charles Leclerc', 'Lewis Hamilton'],
            machine: 'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp'
        },
        mercedes: {
            company: 'mercedes',
            accent_color_1: '#007964',
            accent_color_2: '#00c4a6',
            driver: ['George Russell', 'Kimi Antonelli'],
            machine: 'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mercedes/2025mercedescarright.webp'
        },
        redBull: {
            company: 'red bull racing',
            accent_color_1: '#063889',
            accent_color_2: '#336abf',
            driver: ['Max Verstappen', 'Yuki Tsunoda'],
            machine: 'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/redbullracing/2025redbullracingcarright.webp'
        },
        haas: {
            company: 'haas',
            accent_color_1: '#535658',
            accent_color_2: '#8d9093',
            driver: ['Esteban Ocon', 'Oliver Bearman'],
            machine: 'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/haas/2025haascarright.webp'
        },
        alpine: {
            company: 'alpine',
            accent_color_1: '#005384',
            accent_color_2: '#008dcf',
            driver: ['Pierre Gasly', 'Franco Colapinto'],
            machine: 'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/alpine/2025alpinecarright.webp'
        }
    }
    return (
        <div className='w-full flex flex-wrap justify-around px-[15vw] py-[5vw] gap-[2vw] shrink'>
            {
                Object.entries(card).map((value,key) => {
                    console.log(value[1]);
                    return <Card key ={key} argument = {value[1]}/>
                } )
            }

        </div>

    )
}

export default Layout
