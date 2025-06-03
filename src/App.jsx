import { useState } from 'react';

import './App.css';

const person = {
  link: './steve.jpg',
  name: 'Steve Jobs',
  description:
    'Co-founder of Apple Inc., an American businessman, inventor, and investor. He revolutionized personal computing and consumer electronics with iconic products such as the iPhone.',
  skills: [
    { name: 'Visionary', emoji: '✨', color: '#FFD700' }, // Золотий
    { name: 'Innovator', emoji: '💡', color: '#87CEEB' }, // Небесно-блакитний
    { name: 'Storyteller', emoji: '📚', color: '#90EE90' }, // Світло-зелений
    { name: 'Leader', emoji: '👑', color: '#FF6347' }, // Томатно-червоний
    { name: 'Designer', emoji: '🎨', color: '#DA70D6' }, // Орхідейний
  ],
};

function Avatar({ image, alt }) {
  return <img className="avatar" src={image} alt={alt} />;
}

function Intro({ name, description }) {
  return (
    <div className="info">
      <h1>{name}</h1>
      <div>{description}</div>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <span className="skill" style={{ backgroundColor: skill.color }}>
      {`${skill.name} ${skill.emoji}`}
    </span>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.name} />
      ))}
    </div>
  );
}

function App() {
  const { link, name, description, skills } = person;
  return (
    <div className="card">
      <Avatar image={link} alt={name} />
      <div className="data">
        <Intro name={name} description={description} />

        <SkillList skills={skills} />
      </div>
    </div>
  );
}

export default App;
