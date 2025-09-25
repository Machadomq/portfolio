import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, Search, Eye } from 'lucide-react'

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = [
        { id: 'all', name: 'Todos' },
        { id: 'web', name: 'Web Apps' },
        { id: 'mobile', name: 'Mobile' },
        { id: 'api', name: 'APIs' },
        { id: 'tools', name: 'Ferramentas' },
    ]

    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            category: 'web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plataforma completa de e-commerce com painel administrativo, carrinho de compras e sistema de pagamentos.',
            image: '/api/placeholder/600/400',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            live: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            category: 'web',
            description: 'Aplicativo de gerenciamento de tarefas com funcionalidades avançadas como colaboração em tempo real, notificações push e relatórios detalhados.',
            image: '/api/placeholder/600/400',
            technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
            github: '#',
            live: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Weather Mobile App',
            category: 'mobile',
            description: 'Aplicativo móvel para previsão do tempo com geolocalização, mapas interativos e notificações personalizadas para condições climáticas extremas.',
            image: '/api/placeholder/600/400',
            technologies: ['React Native', 'TypeScript', 'Redux', 'API Integration'],
            github: '#',
            live: '#',
            featured: false
        },
        {
            id: 4,
            title: 'RESTful API Gateway',
            category: 'api',
            description: 'Gateway de API escalável com autenticação JWT, rate limiting, cache Redis e documentação automática com Swagger.',
            image: '/api/placeholder/600/400',
            technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Swagger'],
            github: '#',
            live: '#',
            featured: true
        },
        {
            id: 5,
            title: 'Code Generator CLI',
            category: 'tools',
            description: 'Ferramenta de linha de comando para gerar boilerplates de projetos com templates customizáveis e configurações automatizadas.',
            image: '/api/placeholder/600/400',
            technologies: ['Python', 'Click', 'Jinja2', 'YAML'],
            github: '#',
            live: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Social Media Dashboard',
            category: 'web',
            description: 'Dashboard para gerenciamento de múltiplas contas de redes sociais com analytics avançados, agendamento de posts e métricas em tempo real.',
            image: '/api/placeholder/600/400',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'Charts.js'],
            github: '#',
            live: '#',
            featured: false
        },
    ]

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    const featuredProjects = projects.filter(project => project.featured)

    return (
        <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Meus Projetos
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias
                        e abordagens para resolver problemas reais.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                        <Eye className="w-8 h-8 text-blue-600 mr-3" />
                        Projetos em Destaque
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.slice(0, 4).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                                        {project.title.charAt(0)}
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Destaque
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Código</span>
                                        </motion.a>

                                        <motion.a
                                            href={project.live}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Ver Projeto</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        {/* Category Filters */}
                        <div className="flex items-center space-x-2">
                            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar projetos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* All Projects Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Todos os Projetos
                    </h2>

                    {filteredProjects.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Nenhum projeto encontrado com os filtros aplicados.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 relative">
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                                            {project.title.charAt(0)}
                                        </div>
                                        {project.featured && (
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                    ⭐
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex space-x-3">
                                            <a
                                                href={project.github}
                                                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span className="text-sm">Código</span>
                                            </a>

                                            <a
                                                href={project.live}
                                                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm">Demo</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.section>
            </div>
        </div>
    )
}

export default Projects
