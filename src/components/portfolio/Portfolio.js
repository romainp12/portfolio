import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import Terminal from "../about/Terminal";
import Style from "../about/About.module.scss";

export default function Portfolio() {

    const firstName = info.firstName.toLowerCase()

    function projectsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                projects</p>
            <p><span style={{color: info.baseColor}}>projects <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.projects.map((project, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{project.name}</Box></li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
                <Terminal text={projectsText()}/>
            </Grid>
        </Box>
    );
};
