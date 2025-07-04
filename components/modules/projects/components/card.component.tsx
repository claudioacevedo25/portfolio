import Link from 'next/link'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
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
import { CARD_3D } from 'constants/motion'
import {
  PROJECT_TYPE_CONFIG,
  TECH_COLOR_MAP,
  DEFAULT_PROJECT_CONFIG,
  MAX_VISIBLE_TECHNOLOGIES,
} from './card.constants'
import {
  ProjectHeaderProps,
  TechChipProps,
  TechnologyStackProps,
  ActionButtonProps,
  ProjectActionsProps,
  FeaturedBadgeProps,
  MaterialUIPalette,
  ChipStylesReturn,
} from './card.models'
import styles from './card.module.css'

const getProjectTypeConfig = (type: string) =>
  PROJECT_TYPE_CONFIG[type as keyof typeof PROJECT_TYPE_CONFIG] || DEFAULT_PROJECT_CONFIG

const getTechChipStyles = (
  color: string | undefined,
  palette: MaterialUIPalette,
): ChipStylesReturn => {
  if (!color) {
    return {
      borderColor: palette.primary.main,
      color: palette.primary.main,
    }
  }

  const isLightMode = palette.mode === 'light'
  const colorConfig = TECH_COLOR_MAP[color as keyof typeof TECH_COLOR_MAP]

  const adaptedColor = colorConfig
    ? isLightMode
      ? colorConfig.light
      : colorConfig.dark
    : isLightMode
    ? palette.primary.main
    : color

  return {
    borderColor: adaptedColor,
    color: adaptedColor,
  }
}

const FeaturedBadge: React.FC<FeaturedBadgeProps> = ({ palette }) => (
  <Box
    className={styles.featuredBadge}
    style={{
      backgroundColor: palette.primary.main,
      color: palette.mode === 'dark' ? '#000' : '#fff',
    }}>
    ⭐ Featured
  </Box>
)

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ name, projectType }) => {
  const { color, label } = getProjectTypeConfig(projectType)

  return (
    <Box className={styles.header}>
      <Typography variant="h6" component="h4" className={styles.title}>
        {name}
      </Typography>
      <Chip
        label={label}
        size="small"
        className={styles.projectTypeChip}
        style={{
          backgroundColor: color,
          color: 'white',
        }}
      />
    </Box>
  )
}

const TechChip: React.FC<TechChipProps> = ({ tech, palette }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
  </motion.div>
)

const TechnologyStack: React.FC<TechnologyStackProps> = ({ technologies, palette }) => {
  const visibleTechnologies = technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES)
  const hasOverflow = technologies.length > MAX_VISIBLE_TECHNOLOGIES

  return (
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
  )
}

const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  target,
  ariaLabel,
  color,
  children,
}) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link href={href} target={target}>
      <IconButton
        aria-label={ariaLabel}
        size="small"
        className={styles.actionButton}
        style={{ color }}>
        {children}
      </IconButton>
    </Link>
  </motion.div>
)

const ProjectActions: React.FC<ProjectActionsProps> = ({ name, urls, palette }) => (
  <CardActions className={styles.actions}>
    <ActionButton
      href={urls.site}
      target={urls.site !== '/' ? '_blank' : '_self'}
      ariaLabel={`View the website of ${name}`}
      color={palette.primary.main}>
      <OpenInNewIcon fontSize="small" />
    </ActionButton>

    <ActionButton
      href={urls.github}
      target="_blank"
      ariaLabel={`View the source code of ${name} on GitHub`}
      color={palette.text.primary}>
      <GitHubIcon fontSize="small" />
    </ActionButton>
  </CardActions>
)

export const CustomCard: React.FC<CardProps> = ({
  name,
  description,
  urls,
  technologies,
  projectType,
  featured,
}) => {
  const intl = useIntl()
  const theme = useTheme()
  const palette = theme.palette
  const isDark = palette.mode === 'dark'

  return (
    <motion.div {...CARD_3D} style={{ perspective: 1000 }} className={styles.cardContainer}>
      <Card className={`${styles.card} ${isDark ? styles.cardDark : styles.cardLight}`}>
        {featured && <FeaturedBadge palette={palette} />}

        <CardMedia
          component="img"
          height="200"
          image={urls.picture}
          alt={`Screenshot of the project ${name}`}
          className={styles.image}
        />

        <CardContent className={styles.content}>
          <ProjectHeader name={name} projectType={projectType} />

          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {intl.formatMessage(description)}
          </Typography>

          <TechnologyStack technologies={technologies} palette={palette} />
        </CardContent>

        <ProjectActions name={name} urls={urls} palette={palette} />
      </Card>
    </motion.div>
  )
}
