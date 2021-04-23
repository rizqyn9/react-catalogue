import React,{useState} from 'react';
import './Products.scss';
import Tags from './Tags';


const Product = (props) => {
    const {Title, Desc, Image, Category} = props
    const [activated, setActivated] = useState(false)

    return (
        <div className="card flex flex-col m-2 bg-green-200 shadow-xl rounded-xl overflow-hidden ">
            <div className=" flex-auto flex overflow-hidden border-b-2 border-green-400">
                <div className={`slider flex ${activated ? 'translate' : ''}`}>

                    {/* Tab View */}
                    <div className=" flex flex-col transition-transform duration-1000 width_inner">
                        <div className="flex flex-col">
                            {/* Image && Content Container */}
                            <div className="image_container bg-green-400 bg-cover" 
                                    // style={{backgroundImage:`url(${Image})`}}
                                    ></div>
                        </div>

                        {/* Title & Tag */}
                        <div className="flex-auto text-xl font-semibold py-2 px-3">
                            <div>
                                {Title}
                            </div>
                            <div className="flex flex-wrap">
                                {/* Kategori */}
                                {Category.map(el => {
                                    return <Tags Name={el} />
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Tab Active */}
                    <div className=" flex flex-col  h-full width_inner p-4 items-center justify-center">
                        <h1 className="text-xl font-bold tracking-widest">{Title}</h1>
                        <div className="wrapper whitespace-">
                            {Desc}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab */}
            <div className="flex items-center font-bold text-green-600 h-8 ">
                {/* <div className={`w-1/2 h-full flex items-center justify-center rounded-bl-xl border-green-400 ${!activated ? 'bg-green-200 shadow-md' : 'cursor-pointer hover:text-white hover:bg-green-900 shadow-inner  bg-white  border-4'}`} onClick={() => setActivated(false)}>Tab1</div>
                <div className={`w-1/2 h-full flex items-center justify-center rounded-br-xl border-green-400  ${activated ? 'bg-green-200 shadow-md' : 'cursor-pointer hover:text-white hover:bg-green-900 shadow-inner  bg-white border-4 '}`} onClick={() => setActivated(true)}>Tab2</div> */}
                <div className={`flex-auto h-full flex items-center justify-center cursor-pointer ${activated ? 'bg-green-400 text-green-50' : ''}`} onClick={() => setActivated(!activated)}>{activated? 'Kembali' : 'Detail Harga'}</div>
            </div>
        </div>
    )
}


export default Product