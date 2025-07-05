import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Chip,
  Divider,
  Avatar,
  useTheme,
} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PersonIcon from '@mui/icons-material/Person'
import { useIntl } from 'react-intl'
import { CHATBOT_MSN } from './chatbot.messages'
import styles from './chatbot.module.css'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

interface QuickResponse {
  id: number
  question: any
  answer: any
  keywords: string[]
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { palette } = useTheme()
  const intl = useIntl()

  const quickResponses: QuickResponse[] = [
    {
      id: 1,
      question: CHATBOT_MSN.quickResponses.technologies.question,
      answer: CHATBOT_MSN.quickResponses.technologies.answer,
      keywords: [
        'tecnologías',
        'tech',
        'stack',
        'lenguajes',
        'herramientas',
        'technologies',
        'languages',
        'tools',
      ],
    },
    {
      id: 2,
      question: CHATBOT_MSN.quickResponses.resume.question,
      answer: CHATBOT_MSN.quickResponses.resume.answer,
      keywords: ['cv', 'curriculum', 'resume', 'download', 'descargar'],
    },
    {
      id: 3,
      question: CHATBOT_MSN.quickResponses.experience.question,
      answer: CHATBOT_MSN.quickResponses.experience.answer,
      keywords: [
        'experiencia',
        'años',
        'trabajo',
        'proyectos',
        'experience',
        'years',
        'work',
        'projects',
      ],
    },
    {
      id: 4,
      question: CHATBOT_MSN.quickResponses.freelance.question,
      answer: CHATBOT_MSN.quickResponses.freelance.answer,
      keywords: ['freelance', 'disponible', 'proyectos', 'contratar', 'available', 'hire'],
    },
    {
      id: 5,
      question: CHATBOT_MSN.quickResponses.contact.question,
      answer: CHATBOT_MSN.quickResponses.contact.answer,
      keywords: ['contacto', 'email', 'linkedin', 'github', 'contact'],
    },
  ]

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: intl.formatMessage(CHATBOT_MSN.messages.welcome),
        isUser: false,
        timestamp: new Date(),
      },
    ])
  }, [intl])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    for (const response of quickResponses) {
      const matchedKeywords = response.keywords.filter((keyword) =>
        lowerMessage.includes(keyword.toLowerCase()),
      )

      if (matchedKeywords.length > 0) {
        return intl.formatMessage(response.answer)
      }
    }

    return intl.formatMessage(CHATBOT_MSN.messages.defaultResponse)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickResponse = (response: QuickResponse) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: intl.formatMessage(response.question),
      isUser: true,
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: messages.length + 2,
      text: intl.formatMessage(response.answer),
      isUser: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      <motion.div
        className={styles.floatingButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            width: 60,
            height: 60,
            backgroundColor: palette.primary.main,
            color: palette.mode === 'dark' ? '#000' : '#fff',
            '&:hover': {
              backgroundColor: palette.primary.main,
              filter: 'brightness(1.1)',
            },
            boxShadow: '0 4px 20px rgba(255, 159, 45, 0.3)',
          }}>
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </IconButton>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={styles.chatWidget}>
            <Paper
              elevation={8}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
              <Box
                sx={{
                  backgroundColor: palette.primary.main,
                  color: palette.mode === 'dark' ? '#000' : '#fff',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                  <SmartToyIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {intl.formatMessage(CHATBOT_MSN.header.title)}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {intl.formatMessage(CHATBOT_MSN.header.status)}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  padding: '16px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  maxHeight: '300px',
                }}>
                {messages.map((message) => (
                  <Box
                    key={message.id}
                    sx={{
                      display: 'flex',
                      justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                      alignItems: 'flex-end',
                      gap: 1,
                    }}>
                    {!message.isUser && (
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <SmartToyIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                    )}
                    <Paper
                      elevation={1}
                      sx={{
                        padding: '8px 12px',
                        maxWidth: '70%',
                        backgroundColor: message.isUser
                          ? palette.primary.main
                          : palette.background.paper,
                        color: message.isUser
                          ? palette.mode === 'dark'
                            ? '#000'
                            : '#fff'
                          : palette.text.primary,
                        borderRadius: message.isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      }}>
                      <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                        {message.text}
                      </Typography>
                    </Paper>
                    {message.isUser && (
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <PersonIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                    )}
                  </Box>
                ))}

                {isTyping && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <SmartToyIcon sx={{ fontSize: 16 }} />
                    </Avatar>
                    <Paper
                      elevation={1}
                      sx={{
                        padding: '8px 12px',
                        backgroundColor: palette.background.paper,
                        borderRadius: '16px 16px 16px 4px',
                      }}>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        {intl.formatMessage(CHATBOT_MSN.messages.typing)}
                      </Typography>
                    </Paper>
                  </Box>
                )}
                <div ref={messagesEndRef} />
              </Box>

              <Box sx={{ padding: '8px 16px' }}>
                <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mb: 1 }}>
                  {intl.formatMessage(CHATBOT_MSN.quickResponses.label)}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {quickResponses.slice(0, 3).map((response) => (
                    <Chip
                      key={response.id}
                      label={intl.formatMessage(response.question)}
                      size="small"
                      onClick={() => handleQuickResponse(response)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: `${palette.primary.main}20`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Divider />

              <Box sx={{ padding: '16px', display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder={intl.formatMessage(CHATBOT_MSN.input.placeholder)}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px',
                    },
                  }}
                />
                <IconButton
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  sx={{
                    backgroundColor: palette.primary.main,
                    color: palette.mode === 'dark' ? '#000' : '#fff',
                    '&:hover': {
                      backgroundColor: palette.primary.main,
                      filter: 'brightness(1.1)',
                    },
                    '&:disabled': {
                      backgroundColor: palette.action.disabled,
                    },
                  }}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
