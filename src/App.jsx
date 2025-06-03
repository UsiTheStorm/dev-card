import { useState } from 'react';

import './App.css';

const person = {
  link: './steve.jpg',
  name: 'Steve Jobs',
  description:
    'An American businessman, inventor, and investor best known for co-founding the technology company Apple Inc. A pioneering entrepreneur who revolutionized personal computing and consumer electronics with iconic products like the iPhone.',
  skills: [
    { name: 'Visionary', emoji: '✨', color: '#FFD700' }, // Золотий
    { name: 'Innovator', emoji: '💡', color: '#87CEEB' }, // Небесно-блакитний
    { name: 'Storyteller', emoji: '📚', color: '#90EE90' }, // Світло-зелений
    { name: 'Leader', emoji: '👑', color: '#FF6347' }, // Томатно-червоний
    { name: 'Designer', emoji: '🎨', color: '#DA70D6' }, // Орхідейний
  ],
};

function App() {
  const { link, name, description } = person;
  return (
    <div className="card">
      <Avatar image={link} alt={name} />
      <div className="data">
        <Intro name={name} description={description} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

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

function Skill({ skillName, skillEmojy, skillColor }) {
  return (
    <span className="skill" style={{ backgroundColor: skillColor }}>
      {`${skillName} ${skillEmojy}`}
    </span>
  );
}

function SkillList() {
  const skills = person.skills;
  return (
    <div className="skill-list">
      {skills.map(({ name, emoji, color }) => (
        <Skill skillName={name} skillEmojy={emoji} skillColor={color} key={name} />
      ))}
    </div>
  );
}

export default App;
