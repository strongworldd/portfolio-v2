import { motion } from 'motion/react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import AcademicianBadge from '../assets/academician.webp';
import EverythingConnectedBadge from '../assets/everything-is-connected.webp';
import TraditionalWayBadge from '../assets/do-things-the-traditional-way.webp';

function Skills() {
    const {theme} = useContext(ThemeContext);
    const [hoverTooltip, setHoverTooltip] = useState(null);

    const showTooltip = (event, text) => {
        if (!text) return;
        setHoverTooltip({
            text,
            x: event.clientX + 14,
            y: event.clientY + 14
        });
    };

    const moveTooltip = (event, text) => {
        if (!text) return;
        setHoverTooltip((prev) =>
            prev
                ? { ...prev, x: event.clientX + 14, y: event.clientY + 14 }
                : { text, x: event.clientX + 14, y: event.clientY + 14 }
        );
    };

    const hideTooltip = () => setHoverTooltip(null);

    const htbBadges = [
        {
            image: AcademicianBadge,
            label: 'Académicien',
            alt: 'Badge Hack The Box Academician',
            tooltip: 'Introduction à Hack The Box'
        },
        {
            image: EverythingConnectedBadge,
            label: 'Tout est connecté',
            alt: 'Badge Hack The Box Everything Is Connected',
            tooltip: 'Introduction au Réseautage'
        },
        {
            image: TraditionalWayBadge,
            label: 'Faites les choses de manière traditionnelle',
            alt: 'Badge Hack The Box Do Things The Traditional Way',
            tooltip: 'Introduction au Scripting Bash'
        },
    ];

    const skillSections = [
        {
            title: 'Infrastructure systèmes et réseaux',
            skills: [
                'TCP/IP',
                'Modèle OSI',
                'VLAN',
                'VXLAN',
                'DHCP',
                'DNS',
                'Active Directory',
                'Windows Server',
                'Virtualisation',
                'Linux',
            ],
        },
        {
            title: "Systèmes d'exploitation",
            skills: ['Kali Linux', 'Debian', 'Ubuntu', 'Windows'],
        },
        {
            title: 'Scripting',
            skills: ['Bash', 'Python'],
        },
        {
            title: 'Développement Web',
            skills: ['HTML', 'CSS', 'JS', 'Java', 'Golang', 'TypeScript', 'PHP', 'SQL'],
        },
        {
            title: 'Outils',
            skills: [
                'Cisco Packet Tracer',
                'Metasploit',
                'Nmap',
                'Wireshark',
                'VSCode',
                'VirtualBox',
                'GitHub',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section
            id="skills"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-5xl md:text-6xl font-bold mb-4 ${
                            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                        }`}
                    >
                        Compétences
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1 mx-auto rounded-full ${
                            theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {skillSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            variants={itemVariants}
                            className={`rounded-3xl p-6 md:p-8 border backdrop-blur-sm ${
                                theme === "dark"
                                    ? "bg-[#b8f2e6]/5 border-[#b8f2e6]/20"
                                    : "bg-[#aed9e0]/20 border-[#aed9e0]/40"
                            }`}
                        >
                            <h3 className={`text-2xl md:text-3xl font-semibold mb-5 ${
                                theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                            }`}>
                                {section.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {section.skills.map((skill) => (
                                    <motion.span
                                        key={`${sectionIndex}-${skill}`}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -4,
                                            transition: {
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 14
                                            }
                                        }}
                                        className={`px-4 py-2 rounded-xl text-sm md:text-base font-medium border ${
                                            theme === "dark"
                                                ? "bg-[#b8f2e6]/10 border-[#b8f2e6]/30 text-[#b8f2e6]"
                                                : "bg-[#aed9e0]/50 border-[#aed9e0]/70 text-[#5e6472]"
                                        }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        variants={itemVariants}
                        className={`rounded-3xl p-6 md:p-8 border-2 ${
                            theme === "dark"
                                ? "border-[#b8f2e6]/60 bg-gradient-to-br from-[#b8f2e6]/10 to-transparent"
                                : "border-[#5e6472]/30 bg-gradient-to-br from-[#aed9e0]/40 to-white/20"
                        }`}
                    >
                        <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${
                            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                        }`}>
                            Badges Hack The Box
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {htbBadges.map((badge) => (
                                <motion.div
                                    key={badge.label}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className={`rounded-2xl p-4 border ${
                                        theme === "dark"
                                            ? "border-[#b8f2e6]/35 bg-[#1c1c1c]/45"
                                            : "border-[#5e6472]/25 bg-white/60"
                                    }`}
                                >
                                    <div
                                        onMouseEnter={(event) => showTooltip(event, badge.tooltip)}
                                        onMouseMove={(event) => moveTooltip(event, badge.tooltip)}
                                        onMouseLeave={hideTooltip}
                                        className={`h-36 rounded-xl flex items-center justify-center overflow-hidden ${
                                            theme === "dark" ? "bg-[#0f0f0f]/40" : "bg-[#f3f7f8]"
                                        }`}
                                    >
                                        <img
                                            src={badge.image}
                                            alt={badge.alt}
                                            className="max-h-full max-w-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className={`mt-3 text-center text-sm md:text-base font-medium ${
                                        theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                                    }`}>
                                        {badge.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {hoverTooltip && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`fixed z-[120] pointer-events-none px-3 py-2 rounded-lg text-xs md:text-sm font-medium shadow-xl ${
                        theme === "dark"
                            ? "bg-[#0f0f0f]/95 border border-[#b8f2e6]/40 text-[#b8f2e6]"
                            : "bg-white/95 border border-[#5e6472]/25 text-[#5e6472]"
                    }`}
                    style={{
                        left: hoverTooltip.x,
                        top: hoverTooltip.y
                    }}
                >
                    {hoverTooltip.text}
                </motion.div>
            )}
        </section>
    );
}

export default Skills;
