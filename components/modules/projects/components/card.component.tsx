import Link from 'next/link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { CardProps } from '../projects.model'
import styles from './card.module.css'

export const CustomCard = ({ name, description, urls, technologies }: CardProps) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="190"
      image={urls.picture}
      alt={name}
      className={styles.image}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardContent>
      {technologies.map(({ id, name }) => (
        <Typography key={id} variant="body2" color="text.secondary" component="span">
          {name}
        </Typography>
      ))}
    </CardContent>
    <CardActions disableSpacing>
      <Link href={urls.site} target={urls.site !== '/' ? '_blank' : '_self'}>
        <IconButton aria-label="go to web site">
          <OpenInNewIcon />
        </IconButton>
      </Link>
      <Link href={urls.github} target="_blank">
        <IconButton aria-label="go to github">
          <GitHubIcon />
        </IconButton>
      </Link>
    </CardActions>
  </Card>
)
