import React from 'react';
import TechwatchBlock from "./TechwatchBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
 
 export default function Techwatch() {
   return (
     <Box>
       <Grid container display={'flex'} justifyContent={'center'}>
         {info.portfolio.map((project, index) => (
           <Grid item xs={12} md={6} key={index}>
             <TechwatchBlock
               image={project.image}
               live={project.live}
               source={project.source}
               title={project.title}
               description={project.description}
             />
           </Grid>
         ))}
       </Grid>
     </Box>
   );
 }
