import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  const skillsSection = (skill) => {
    const keyName = Object.keys(skill)[0];
    const values = skill[keyName];

    return (
      <div key={keyName}>
        <p style={{ color: info.baseColor }}> {keyName}</p>
        <ul className={Style.skills}>
          {values.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        {Object.keys(info.skills).map((key) => {
          return skillsSection({ [key]: info.skills[key] });
        })}
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

function stagesText() {
  return (
    <>
      <p>
        <span style={{ color: info.baseColor }}>
          {firstName}
          {info.lastName.toLowerCase()} $
        </span>{' '}
        cd stages
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          stages <span className={Style.green}>(main)</span> $
        </span>{' '}
        ls
      </p>
      {info.stages.map((stage, index) => (
        <div key={index} className={Style.stageItem}>
          <p style={{ color: info.baseColor }}>{stage.company} - {stage.date}</p>
          <ul>
            {stage.missions.map((mission, mIndex) => (
              <li key={mIndex}>{mission}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={stagesText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
