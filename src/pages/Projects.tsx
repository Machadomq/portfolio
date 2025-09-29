import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, Search, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

// Função helper para obter o caminho correto das imagens
const getImagePath = (imageName: string) => {
    return `/portfolio/${imageName}`
}

// Componente de Carrossel de Imagens - Atualizado
const ImageCarousel = ({ images, title, className = "" }: { images: string[], title: string, className?: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-play do carrossel
    useEffect(() => {
        if (images.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 4000) // Troca a cada 4 segundos

        return () => clearInterval(interval)
    }, [images.length])

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    if (images.length === 0) {
        return (
            <div className={`bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center ${className}`}>
                <span className="text-white text-4xl font-bold">{title.charAt(0)}</span>
            </div>
        )
    }

    return (
        <div className={`relative ${className}`}>
            {/* Imagem atual */}
            <img
                src={images[currentIndex]}
                alt={`${title} - Imagem ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                onError={(e) => {
                    e.currentTarget.style.display = 'none'
                }}
            />

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />

            {/* Controles do carrossel (aparecem no hover) */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Indicadores de página */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white'
                                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

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
            title: 'PlaySpot Quadras Esportivas',
            category: 'web',
            description: 'Plataforma web para reservas de quadras esportivas, permitindo aos usuários encontrar, reservar e pagar por quadras em sua área local com integração de mapas e avaliações. Além de tudo isso o sistema conta com um painel administrativo completo para gerenciar as quadras, reservas e usuários de forma eficiente.',
            images: [
                getImagePath('printplayspothome.jpg'),
                getImagePath('Captura de tela 2025-05-13 140651.png'),
                getImagePath('Captura de tela 2025-05-06 171605.png'),
                getImagePath('Captura de tela 2025-05-07 134851.png')
            ],
            technologies: ['Spring-Boot', 'React', 'Tailwind CSS', 'MySQL'],
            github: 'https://github.com/Machadomq/PlaySpot',
            live: 'https://github.com/Machadomq/PlaySpot',
            featured: true
        },
        {
            id: 2,
            title: 'Elementa',
            category: 'game',
            description: 'elementa é um jogo educativo com a tematica de quimica, voltado para estudantes do ensino medio, o jogo apresenta desafios e quebra-cabecas baseados em conceitos quimicos, promovendo o aprendizado de forma interativa e divertida. juntamente com uma aventura repleta de desafios e descobertas.',
            images: [
                getImagePath('Captura de tela 2025-09-29 135414.png'),
                getImagePath('Captura de tela 2025-05-09 165724.png'),
                getImagePath('Captura de tela 2025-07-09 205451.png')
            ],
            technologies: ['Godot 4.3', 'GDScript', 'Aseprite'],
            github: 'https://github.com/Machadomq/elementa',
            live: 'https://github.com/Machadomq/elementa',
            featured: true
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
                                    <ImageCarousel
                                        images={project.images}
                                        title={project.title}
                                        className="w-full h-full"
                                    />
                                    <div className="absolute top-4 right-4 z-10">
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
                                        <ImageCarousel
                                            images={project.images}
                                            title={project.title}
                                            className="w-full h-full"
                                        />
                                        {project.featured && (
                                            <div className="absolute top-3 right-3 z-10">
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
