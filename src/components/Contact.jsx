import { CONTACT } from "../constants"
import { motion } from "motion/react"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
             className="my-10 text-center text-4xl">Contato</motion.h2>
            <motion.div
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.5}}
            className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="mailto:dev.lucasnascimento081@gmail.com?subject=Contato%20via%20Portfólio&body=Olá,%20te%20encontrei%20pelo%20seu%20portfólio!" target="blank" className="border-b hover:bg-purple-800 hover:rounded-2xl hover:transition duration-150 ease-in ">{CONTACT.email}</a>
            </motion.div>
        </div>
    )
}

export default Contact