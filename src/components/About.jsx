import aboutImg from "../assets/about.jpg"
import { motion } from "motion/react"
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, Y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Sobre
                <span className="text-neutral-500"> Mim</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center p-6">
                        <img className="rounded-2xl " src={aboutImg} alt="sobre" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className=" flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl p-6">Sou um desenvolvedor front-end focado em criar interfaces rápidas, responsivas e visualmente atraentes. Trabalho com HTML5, CSS3, JavaScript, React, TailwindCSS e Next.js, sempre buscando unir performance e boa experiência do usuário. Gosto de trabalhar em equipe, aprender novas tecnologias e transformar ideias em soluções funcionais e bem projetadas.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About