import React from 'react'

const Card = (parameter) => {
    
    console.log(parameter);
    const company = parameter.argument.company.toUpperCase()
    const accent_color_1 = parameter.argument.accent_color_1
    const accent_color_2 = parameter.argument.accent_color_2
    const driver = parameter.argument.driver
    const machine = parameter.argument.machine

    return (
        <div className='w-[30vw] rounded-md  overflow-hidden ' >
            <div id="head" style={{ backgroundColor: accent_color_1 }} className='w-full  text-[30px] py-[10px] px-[20px]'>{company}</div>
            <div id="drivers" style={{ backgroundColor: accent_color_1 }}  className='flex items-center flex-wrap gap-[2vw] text-[18px] px-[20px] pb-[10px]' >
                <h2 id="driver"><span id="first">{driver[0].split(' ')[0]}</span> {driver[0].split(' ')[1].toUpperCase()}</h2>
                <h2 id="driver"><span id="first">{driver[1].split(' ')[0]}</span> {driver[1].split(' ')[1].toUpperCase()}</h2>
            </div>
            <div id="machine" style={{ backgroundColor: accent_color_2 }}  className=' py-[10px] px-[20px]'><img className='w-full' src={machine} alt="" /></div>
        </div>
    )
}

export default Card
