import profilePic from "../assets/KevinRushProfile.png"
import { motion } from "motion/react"

const conatainer = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4  lg:mb-35 ml-8 mr-8">
            <div className=" flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={conatainer(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin trancking-tight lg:mt-16 lg:text-8xl">Lucas Nascimento</motion.h1>
                        <motion.span variants={conatainer(0.5)}
                            initial="hidden"
                            animate="visible" className="cursor-pointer bg-linear-to-r from-pink-200 viu-slate-500 to-purple-800 bg-clip-text text-3xl tracking-tight text-transparent ">Desenvolvedor Front End</motion.span>
                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter "
                            variants={conatainer(1)}
                            initial="hidden"
                            animate="visible">Sou um desenvolvedor front-end apaixonado por criar interfaces modernas, eficientes e focadas na experiência do usuário. Domino HTML5, CSS3, JavaScript, React, TailwindCSS e Next.js, tecnologias que utilizo diariamente para transformar ideias em interfaces rápidas, responsivas e bem construídas. Tenho um forte compromisso com código limpo, boas práticas e performance, sempre buscando entregar soluções que se destaquem pela qualidade visual e técnica. Meu objetivo é evoluir continuamente como profissional e contribuir para projetos que impactem positivamente a vida das pessoas através da web.</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                         initial={{ x:100, opacity:0}}
                         animate={{x: 0, opacity:1}}
                         transition={{ duration: 1, delay: 1.2}}
                         src={profilePic} alt="Lucas Nascimento" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero