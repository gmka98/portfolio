import React from "react"
import Image from "next/image"
import Link from "next/link"
import AnimatedText from "@/components/AnimatedText"
import TransitionEffect from "@/components/TransitionEffects"
import Diplomas from "@/components/Diplomas"
import { motion,AnimatePresence } from "framer-motion"

const certificate = () =>{
    return(
    <>
    <AnimatedText
      text="Certification"/>
    <TransitionEffect/>
    <Diplomas/>

    </>
    )
}
export default certificate