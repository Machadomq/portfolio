import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const Home = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    // URLs corretas para GitHub Pages
    const profileImageUrl = '/portfolio/profile.jpg'
    const cvFileUrl = '/portfolio/cv.pdf'

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="text-center"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="mb-8"
                        >
                            <div className="relative inline-block">
                                {/* Avatar Image as background layer */}
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative">
                                        <img
                                            src={profileImageUrl}
                                            alt="Gabriel Machado"
                                            className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                                            style={{ zIndex: 0 }}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none'
                                                console.log('Erro ao carregar imagem:', profileImageUrl)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse" />
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Gabriel Machado
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            Graduando em engenharia de software
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                        >
                            Bem-vindo ao meu portfolio pessoal, veja meus projetos e habilidades.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                        >
                            <Link to="/projects">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
                                >
                                    <span>Ver Projetos</span>
                                    <ArrowDown className="w-5 h-5" />
                                </motion.div>
                            </Link>

                            <motion.a
                                href={cvFileUrl}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2"
                                download
                            >
                                <Download className="w-5 h-5" />
                                <span>Download CV</span>
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center space-x-6 mt-12"
                        >
                            {[
                                { icon: Github, href: 'https://github.com/Machadomq', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/gabriel-machadomq', label: 'LinkedIn' },
                                {
                                    icon: Mail,
                                    label: 'Copiar Email',
                                    onClick: () => {
                                        navigator.clipboard.writeText('gbrielmq1213@gmail.com');
                                        alert('Email copiado!');
                                    },
                                },
                            ].map(({ icon: Icon, href, label, onClick }) => (
                                href ? (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        aria-label={label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.a>
                                ) : (
                                    <motion.button
                                        key={label}
                                        type="button"
                                        onClick={onClick}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        aria-label={label}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.button>
                                )
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-gray-400 dark:text-gray-500"
                    >
                        
                    </motion.div>
                </motion.div>
            </section>

            {/* Skills Preview Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Tecnologias & Ferramentas
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Conjunto de tecnologias modernas que utilizo para criar soluções robustas e escaláveis
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            'React', 'TypeScript', 'Java', 'Python', 'JavaScript', 'Spring Boot',
                            'Tailwind', 'MySQL', 'Insominia', 'Flask', 'Git'
                        ].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        {skill.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">{skill}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
