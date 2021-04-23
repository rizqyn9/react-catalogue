import React from 'react'
import LinkNav from './LinkNav'


const Header = () => {
    return (
        <nav className=" h-16 px-24 bg-green-200 flex justify-between items-center mb-10 ">
            <div className=" text-3xl font-bold text-green-900">E commer</div>
            {/* <div className="">
                <LinkNav name="Link1" />
                <LinkNav name="Link2" />
                <LinkNav name="Link3" />
                <LinkNav name="Link4" />
            </div> */}
            <div></div>
        </nav>
    )
}

export default Header