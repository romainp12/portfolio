import React from 'react';
import { Box, Grid, Typography, Container, Card, CardContent, CardMedia, Divider, Chip } from "@mui/material";
import { info } from "../../info/Info";
import Style from './Techwatch.module.scss';

export default function Techwatch() {
  // Utilisation des données directement depuis info.js
  const autonomousCarData = info.autonomousCars;
  // Détection du mode sombre basé sur les classes CSS
  const darkMode = document.body.classList.contains('dark') || document.querySelector('.dark') !== null;
  
  return (
    <Container maxWidth="lg" sx={{ py: 6 }} className={Style.techwatchContainer}>
      {/* En-tête de la veille technologique */}
      <Box mb={6} textAlign="center" className={Style.header}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            background: info.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            fontWeight: 'bold',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          Veille Technologique - Voitures Autonomes
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 4, 
            maxWidth: '800px', 
            mx: 'auto',
            color: 'white',
            backgroundColor: darkMode ? 'rgba(20,20,20,0.8)' : 'rgba(0,0,0,0.7)',
            p: 2,
            borderRadius: '8px',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {autonomousCarData.introduction}
        </Typography>
        
        <Box 
          component="div"
          sx={{ 
            width: '100%',
            height: '300px',
            background: `url(https://dda.ndus.edu/ddreview/wp-content/uploads/sites/18/2021/10/selfDriving.png) center/cover no-repeat`,
            borderRadius: '16px',
            mb: 4,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
          }}
        />
      </Box>

      {/* Sections de la veille */}
      <Grid container spacing={4}>
        {autonomousCarData.sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Card 
              elevation={0} 
              sx={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                },
                backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                border: `1px solid ${darkMode ? '#444' : '#eaeaea'}`
              }}
              className={Style.sectionCard}
            >
              <Grid container>
                <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography 
                      variant="h4" 
                      component="h2" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                        position: 'relative',
                        display: 'inline-block',
                        color: darkMode ? '#f5f5f5' : '#333',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-6px',
                          left: '0',
                          width: '40px',
                          height: '3px',
                          background: info.gradient,
                          borderRadius: '2px'
                        }
                      }}
                    >
                      {section.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3,
                        color: darkMode ? '#e0e0e0' : 'text.primary'
                      }}
                    >
                      {section.content}
                    </Typography>
                    
                    <Box sx={{ mt: 'auto' }}>
                      {section.tags.map((tag, tagIndex) => (
                        <Chip 
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            background: info.gradient,
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Grid>
                
                <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
                  <CardMedia
                    component="img"
                    image={section.image}
                    alt={section.imageAlt}
                    sx={{ 
                      height: '100%',
                      minHeight: '300px',
                      objectFit: 'cover',
                      filter: darkMode ? 'brightness(0.95)' : 'brightness(1.05)',
                      transition: 'filter 0.3s ease',
                      '&:hover': {
                        filter: darkMode ? 'brightness(1.05)' : 'brightness(1.1) saturate(1.1)'
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Conclusion - Nouveau design */}
      <Box 
        my={6} 
        sx={{ 
          borderRadius: '16px', 
          overflow: 'hidden',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
        }} 
        className={Style.newConclusion}
      >
        {/* En-tête de la conclusion */}
        <Box 
          sx={{ 
            background: info.gradient,
            py: 2,
            px: 4
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
            }}
          >
            Conclusion
          </Typography>
        </Box>
        
        {/* Contenu de la conclusion */}
        <Box 
          sx={{ 
            p: 4,
            backgroundColor: darkMode ? '#2a2a2a' : '#ffffff'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: darkMode ? '#f5f5f5' : '#333333',
              fontSize: '1.05rem', 
              lineHeight: 1.8
            }}
          >
            {autonomousCarData.conclusion}
          </Typography>
        </Box>
      </Box>

      {/* Ressources */}
      <Box mb={6}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            color: darkMode ? '#f5f5f5' : '#333'
          }}
        >
          Ressources
        </Typography>
        
        <Divider sx={{ mb: 2, backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
        
        <ul className={`${Style.resourcesList} ${darkMode ? Style.darkResources : ''}`}>
          {autonomousCarData.resources.map((resource, index) => (
            <li key={index}>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={Style.resourceLink}
                style={{ color: darkMode ? 'rgb(0,255,164)' : 'rgb(166,104,255)' }}
              >
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </Box>

      {/* Mode terminal pour la cohérence avec le reste du site */}
      <Box 
        mb={6} 
        p={3} 
        sx={{ 
          backgroundColor: darkMode ? '#1a1a1a' : '#2E3440', 
          borderRadius: '8px', 
          color: 'white' 
        }} 
        className={Style.terminalSection}
      >
        <Box mb={2} sx={{ display: 'flex', gap: '8px' }}>
          <span className={Style.terminalDot} style={{ backgroundColor: '#FF5F56' }}></span>
          <span className={Style.terminalDot} style={{ backgroundColor: '#FFBD2E' }}></span>
          <span className={Style.terminalDot} style={{ backgroundColor: '#27C93F' }}></span>
        </Box>
        
        <Typography sx={{ fontFamily: 'monospace', mb: 2 }}>
          <span style={{ color: info.baseColor }}>
            {info.firstName.toLowerCase()}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd tech-watch/voitures-autonomes
        </Typography>
        
        <Typography sx={{ fontFamily: 'monospace' }}>
          <span style={{ color: info.baseColor }}>
            voitures-autonomes <span style={{ color: '#8fbcbb' }}>(main)</span> $
          </span>{' '}
          cat README.md
        </Typography>
        
        <Box mt={2} sx={{ fontFamily: 'monospace' }}>
          <Typography variant="body2" sx={{ color: '#D8DEE9', mb: 1 }}>
            ## Cette veille technologique est mise à jour régulièrement
          </Typography>
          
          <Typography variant="body2" sx={{ color: '#D8DEE9', mb: 1 }}>
            ## Dernière mise à jour: Avril 2025
          </Typography>
          
          <Typography variant="body2" sx={{ color: '#D8DEE9' }}>
            ## Pour en savoir plus, consultez les ressources listées ci-dessus.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
