import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function ProjectCard({ title, description, image, imageAlt, githubUrl }) {
    const { theme } = useContext(ThemeContext);
    const hasContent = Boolean(title || description || image);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative h-full"
        >
            {/* Card container */}
            <div className={`h-full min-h-[320px] p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 relative overflow-hidden ${
                theme === "dark" 
                    ? "bg-[#5e6472]/30 border-[#b8f2e6]/20 hover:border-[#b8f2e6]/50 hover:bg-[#5e6472]/50" 
                    : "bg-white/80 border-[#aed9e0]/30 hover:border-[#aed9e0]/60 hover:bg-white"
            }`}>
                {/* Animated gradient overlay */}
                <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        theme === "dark"
                            ? "bg-gradient-to-br from-[#b8f2e6]/10 via-transparent to-[#aed9e0]/10"
                            : "bg-gradient-to-br from-[#aed9e0]/20 via-transparent to-[#b8f2e6]/20"
                    }`}
                />

                {/* Decorative corner accent */}
                <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {hasContent ? (
                    <div className="relative z-10 h-full flex flex-col">
                        {image && (
                            <div className="w-full h-40 mb-5 rounded-2xl overflow-hidden">
                                <img
                                    src={image}
                                    alt={imageAlt || title || 'Illustration du projet'}
                                    className="w-full h-full object-contain scale-[1.4]"
                                />
                            </div>
                        )}

                        {title && (
                            <h3
                                className={`text-2xl font-bold mb-3 ${
                                    theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                                }`}
                            >
                                {title}
                            </h3>
                        )}

                        {description && (
                            <p
                                className={`leading-relaxed ${
                                    theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                                } opacity-90`}
                            >
                                {description}
                            </p>
                        )}

                        {githubUrl && (
                            <motion.a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-6 inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                                    theme === "dark"
                                        ? "bg-[#b8f2e6]/15 text-[#b8f2e6] border border-[#b8f2e6]/30 hover:bg-[#b8f2e6]/25"
                                        : "bg-[#aed9e0]/30 text-[#5e6472] border border-[#aed9e0]/50 hover:bg-[#aed9e0]/45"
                                }`}
                                aria-label="Voir le depot GitHub du projet"
                            >
                                <FaGithub size={16} />
                                <span>Voir le dépôt GitHub</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        )}
                    </div>
                ) : (
                    <div className="relative z-10 h-full">
                        <motion.div
                            className={`w-full h-full rounded-2xl ${
                                theme === "dark" ? "bg-[#b8f2e6]/5" : "bg-[#aed9e0]/10"
                            }`}
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.02, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                )}

                {/* Hover shine effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: theme === "dark"
                            ? "linear-gradient(135deg, transparent 0%, rgba(184, 242, 230, 0.1) 50%, transparent 100%)"
                            : "linear-gradient(135deg, transparent 0%, rgba(174, 217, 224, 0.15) 50%, transparent 100%)"
                    }}
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    );
}

export default ProjectCard;
