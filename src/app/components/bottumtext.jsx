import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Bottumtext() {
    return (
        <section className='px-[95px] md:px-20 lg:px-24'>
            <div className='absolute '>
                <Avatar>
                    <AvatarImage src="./profile.png" className='h-12 md:h-14 w-12 md:min-w-14 rounded-full' />
                    <AvatarFallback>DG</AvatarFallback>
                </Avatar>

            </div>

            <div>
                <p className='text-6xl ml-14 md:ml-[70px]'>
                    Let’s talk about a project, collaboration or an idea you may have
                </p>
            </div>
        </section>
    )
}


