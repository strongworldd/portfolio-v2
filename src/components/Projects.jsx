import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import ctfImage from '../assets/CTF.png';
import authImage from '../assets/auth.png';
import windowsImage from '../assets/Windows.png';

function Projects() {
    const { theme } = useContext(ThemeContext);
    
    const projectSlots = [
        {
            title: 'Hacoeur',
            description:
                "Création d'un CTF d'initiation à la cybersécurité, pensé pour les débutants dans le cadre d'un projet scolaire en groupe. J'ai contribué à la conception des challenges OSINT et stéganographie.",
            image: ctfImage,
            imageAlt: 'Capture du projet CTF Hacoeur'
        },
        {
            title: "Authentification PHP",
            description:
                "Projet scolaire réalisé en groupe pour créer un site e-commerce en PHP. J'ai pris en charge la mise en place du système d'inscription et de connexion des utilisateurs.",
            image: authImage,
            imageAlt: "Capture du module d'authentification PHP",
            githubUrl: 'https://github.com/tymds/PHP-Site-Ecommerce'
        },
        {
            title: 'Infrastructure Windows Server',
            description:
                "Mise en place d'un serveur Windows avec Active Directory, DHCP et DNS dans le cadre d'un projet scolaire.",
            image: windowsImage,
            imageAlt: 'Configuration Windows Server avec AD, DHCP et DNS'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section
            id="projects"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-5xl md:text-6xl font-bold mb-4 ${
                            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                        }`}
                    >
                        Projets
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1 mx-auto rounded-full mb-6 ${
                            theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className={`text-lg max-w-2xl mx-auto ${
                            theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                        } opacity-90`}
                    >
                        Voici quelques projets qui illustrent mes compétences et ma passion pour la cybersécurité.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectSlots.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Projects;
