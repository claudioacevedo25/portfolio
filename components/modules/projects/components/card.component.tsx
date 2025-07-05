import { useIntl } from 'react-intl'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useTheme } from '@mui/material'
import { CardProps } from '../projects.model'
import {
  PROJECT_TYPE_CONFIG,
  TECH_COLOR_MAP,
  DEFAULT_PROJECT_CONFIG,
  MAX_VISIBLE_TECHNOLOGIES,
} from './card.constants'
import styles from './card.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const getProjectTypeConfig = (type: string) =>
  PROJECT_TYPE_CONFIG[type as keyof typeof PROJECT_TYPE_CONFIG] || DEFAULT_PROJECT_CONFIG

const getTechChipStyles = (color: string | undefined, palette: any) => {
  if (!color) return {}

  const colorMap = TECH_COLOR_MAP[color as keyof typeof TECH_COLOR_MAP]
  if (!colorMap) return {}

  const chipColor = palette.mode === 'dark' ? colorMap.dark : colorMap.light
  return {
    borderColor: chipColor,
    color: chipColor,
    backgroundColor: `${chipColor}15`,
  }
}

const FeaturedBadge: React.FC<{ isFeatured: boolean }> = ({ isFeatured }) => {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isFeatured && badgeRef.current) {
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 3,
        ease: 'none',
        repeat: -1,
      })
    }
  }, [isFeatured])

  if (!isFeatured) return null

  return (
    <div ref={badgeRef} className={styles.featuredBadge}>
      ⭐
    </div>
  )
}

const TechChip: React.FC<{
  tech: { id: number; name: string; icon?: string; color?: string }
  palette: any
}> = ({ tech, palette }) => {
  const chipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chipRef.current) {
      gsap.fromTo(
        chipRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: Math.random() * 0.3,
        },
      )
    }
  }, [])

  return (
    <div ref={chipRef}>
      <Chip
        label={
          <Box className={styles.techChipIcon}>
            {tech.icon && <span className={styles.techChipIconEmoji}>{tech.icon}</span>}
            <span>{tech.name}</span>
          </Box>
        }
        size="small"
        variant="outlined"
        className={styles.techChip}
        style={getTechChipStyles(tech.color, palette)}
      />
    </div>
  )
}

const ActionButton: React.FC<{
  href: string
  icon: React.ReactNode
  label: string
  palette: any
}> = ({ href, icon, label, palette }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
    }
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
    }
  }

  return (
    <IconButton
      ref={buttonRef}
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: palette.primary.main }}>
      {icon}
    </IconButton>
  )
}

export const ProjectCard: React.FC<CardProps> = ({
  id,
  name,
  urls,
  description,
  technologies,
  projectType,
  featured,
}) => {
  const { palette } = useTheme()
  const intl = useIntl()
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const typeConfig = getProjectTypeConfig(projectType)
  const visibleTechnologies = technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES)
  const hasOverflow = technologies.length > MAX_VISIBLE_TECHNOLOGIES

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            once: true,
          },
        },
      )
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setMousePosition({ x: rotateX, y: rotateY })

    gsap.to(cardRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center',
    })

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
  }

  return (
    <div
      ref={cardRef}
      className={styles.cardContainer}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Card
        className={styles.card}
        elevation={isHovered ? 20 : 4}
        style={{
          backgroundColor: palette.background.paper,
          borderRadius: '16px',
          transform: 'perspective(1000px)',
        }}>
        <FeaturedBadge isFeatured={featured} />

        <CardMedia
          ref={imageRef}
          component="img"
          height="200"
          image={urls.picture}
          alt={`${name} project screenshot`}
          className={styles.cardImage}
          loading="lazy"
        />

        <CardContent className={styles.cardContent}>
          <div className={styles.projectHeader}>
            <Typography
              variant="h4"
              component="h4"
              className={styles.projectTitle}
              style={{
                color: palette.mode === 'dark' ? '#ffffff' : undefined,
                background: palette.mode === 'dark' ? 'none' : undefined,
                backgroundClip: palette.mode === 'dark' ? 'initial' : undefined,
                WebkitBackgroundClip: palette.mode === 'dark' ? 'initial' : undefined,
                WebkitTextFillColor: palette.mode === 'dark' ? 'initial' : undefined,
              }}>
              {name}
            </Typography>
            <Chip
              label={typeConfig.label}
              size="small"
              className={styles.projectTypeChip}
              style={{
                backgroundColor: typeConfig.color,
                color: '#fff',
              }}
            />
          </div>

          <Typography
            variant="body2"
            className={styles.description}
            style={{
              color: palette.text.secondary,
              minHeight: '3.4rem',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
            }}>
            {intl.formatMessage(description)}
          </Typography>

          <Box className={styles.techContainer}>
            {visibleTechnologies.map((tech) => (
              <TechChip key={tech.id} tech={tech} palette={palette} />
            ))}
            {hasOverflow && (
              <Chip
                label={`+${technologies.length - MAX_VISIBLE_TECHNOLOGIES}`}
                size="small"
                variant="outlined"
                className={styles.overflowChip}
                style={{
                  borderColor: palette.text.secondary,
                  color: palette.text.secondary,
                }}
              />
            )}
          </Box>
        </CardContent>

        <CardActions className={styles.cardActions}>
          {urls.github && (
            <ActionButton
              href={urls.github}
              icon={<GitHubIcon />}
              label="Ver repositorio"
              palette={palette}
            />
          )}
          {urls.site && (
            <ActionButton
              href={urls.site}
              icon={<OpenInNewIcon />}
              label="Ver demo"
              palette={palette}
            />
          )}
        </CardActions>
      </Card>
    </div>
  )
}
