import React from "react";
import  Image  from "next/image";
import { motion } from "framer-motion";
import {ImHtmlFive} from 'react-icons/im'
import {DiCss3} from 'react-icons/di'
import {RiJavascriptLine} from 'react-icons/ri'
import Html from "../../public/images/frontend/html.jpeg"
import Css from "../../public/images/frontend/css.jpg"
import Js from "../../public/images/frontend/js.jpeg"


const Technology = () =>{
    return(
        <>
        <section className="flex mt-32">
            <div className="w-1/2">
                <p className="text-4xl font-semibold">
                    Full Stack
                </p>
            </div>
            <div className="w-1/2">
                <p className="text-center">Frontend</p>
                <div className="border-solid border-2">
                <ul className="flex justify-between">
                            <li>
                                <Image
                                    src={Html}
                                    width={200}
                                    height={150}
                                    alt="Html"
                                />
                            </li>
                            <li>
                                <Image
                                    src={Css}
                                    width={200}
                                    height={150}
                                    alt="Css"
                                />
                            </li>
                            <li>
                                <Image
                                    src={Js}
                                    width={200}
                                    height={150}
                                    alt="Js"
                                />
                            </li>
                        </ul>
                </div>

            </div>  
        </section>  


        </>
    )
}
export default Technology