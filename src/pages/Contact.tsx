import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
}

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactForm>()

    const onSubmit = async (data: ContactForm) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Simular envio do formulário
            await new Promise(resolve => setTimeout(resolve, 2000))

            console.log('Form data:', data)
            setSubmitStatus('success')
            reset()
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'gbrielmq1213@gmail.com',
            href: 'mailto:gbrielmq1213@gmail.com'
        },
        {
            icon: Phone,
            label: 'Telefone',
            value: '+55 (47) 99259-4556',
            href: 'tel:+55(47) 9925-5456'
        },
        {
            icon: MapPin,
            label: 'Localização',
            value: 'Jaraguá do Sul, Santa Catarina',
            href: '#'
        },
    ]

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
                        Vamos Conversar
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Tem um projeto em mente? Quer discutir uma ideia? Ou apenas quer dizer olá?
                        Eu adoraria ouvir de você!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Informações de Contato
                        </h2>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                                            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
                                        <p className="text-gray-600 dark:text-gray-300">{value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Sobre Respostas
                            </h3>
                            <div className="space-y-3 text-gray-600 dark:text-gray-300">
                                <p> Respondo em até 24 horas</p>
                                <p> Disponível para projetos remotos</p>
                                <p> Prefiro conversas por email primeiro</p>
                                <p> Disponível para calls quando necessário</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Envie uma Mensagem
                        </h2>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2"
                            >
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <p className="text-green-800 dark:text-green-200">
                                    Mensagem enviada com sucesso! Retornarei em breve.
                                </p>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2"
                            >
                                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                                <p className="text-red-800 dark:text-red-200">
                                    Erro ao enviar mensagem. Tente novamente ou use o email diretamente.
                                </p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Nome *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name', {
                                        required: 'Nome é obrigatório',
                                        minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    placeholder="Seu nome completo"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', {
                                        required: 'Email é obrigatório',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Email inválido'
                                        }
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    placeholder="seu@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Assunto *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    {...register('subject', {
                                        required: 'Assunto é obrigatório',
                                        minLength: { value: 5, message: 'Assunto deve ter pelo menos 5 caracteres' }
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    placeholder="Sobre o que você gostaria de conversar?"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Mensagem *
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    {...register('message', {
                                        required: 'Mensagem é obrigatória',
                                        minLength: { value: 20, message: 'Mensagem deve ter pelo menos 20 caracteres' }
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                                    placeholder="Descreva seu projeto, ideia ou o que você tem em mente..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                                    } text-white`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Enviar Mensagem</span>
                                    </>
                                )}
                            </motion.button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                Seus dados estão seguros e nunca serão compartilhados com terceiros.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact
