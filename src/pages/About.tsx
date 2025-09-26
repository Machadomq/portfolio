import { motion } from 'framer-motion'
import { Calendar, MapPin, Code, GraduationCap } from 'lucide-react'

const About = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
        { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'] },
        { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'] },
        { category: 'Ferramentas', items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira'] },
    ]

    const experience = [
        {
            title: 'Senior Full Stack Developer',
            company: 'Tech Corp',
            period: '2022 - Presente',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Frontend Developer',
            company: 'StartUp XYZ',
            period: '2020 - 2022',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Junior Developer',
            company: 'Web Solutions',
            period: '2019 - 2020',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
    ]

    const education = [
        {
            degree: 'Bacharel em Ciência da Computação',
            school: 'Universidade Federal',
            period: '2015 - 2019',
            description: 'Focado em desenvolvimento de software, algoritmos e estruturas de dados.'
        },
        {
            degree: 'Curso Técnico em Informática',
            school: 'Instituto Tecnológico',
            period: '2013 - 2015',
            description: 'Base sólida em programação e sistemas de informação.'
        },
    ]

    return (
        <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Sobre Mim
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Sou estudante Bacharel em Engenharia de software na Universidade Catolica de Santa Catarina, e trabalho em uma industria alimenticia em Jaraguá do sul, Santa Catarina.
                    </p>
                </motion.div>

                {/* Personal Info */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
                        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                            <div className="flex-shrink-0">
                                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                                    <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                                        <span className="text-6xl font-bold text-gray-600 dark:text-gray-300">SN</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Gabriel Machado Queiroz
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>

                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <span>Santa Catarina, Brasil</span>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start space-x-2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Skills */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Habilidades Técnicas
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <Code className="w-6 h-6 text-blue-600" />
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Experience */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Experiência Profissional
                    </h2>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                            {job.title}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                                            {job.company}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                                        <Calendar className="w-4 h-4" />
                                        <span>{job.period}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Formação Acadêmica
                    </h2>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                                            {edu.school}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {edu.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default About
