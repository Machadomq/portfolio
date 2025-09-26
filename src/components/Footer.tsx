import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:seu@email.com', label: 'Email' },
    ]

    return (
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>© {currentYear} Portfolio.</span>
                        <span> Feito por gabriel machado queiroz</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex flex-wrap justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Política de Privacidade
                        </a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Termos de Uso
                        </a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
