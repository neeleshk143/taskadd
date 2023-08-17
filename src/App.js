import React from 'react';
import './App.css';

const cardsData = [
  {    title: 'Choose Your Local Targeting',
  description: 'Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.',
  
  },
  {
    title: 'Track Your Conversion',
    description: 'We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated',
  },
];
const cardsDataa = [
  {    title: 'Customized Campaigns',
  description: 'Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest.',
  
  },
  {    title: 'Get Dedicated Support Team',
  description: 'We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.',
  
  },
  {
    title: 'Quality Assurance',
    description: 'We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.',
  },
];

function App() {
  return (
    <div className="choose-container">
  <div className="choose-left">
    <div className="title-container chooseus-title">
      <h3 className='title'>Why Choose Us?</h3>
      <h2 className='subtitle'>Why the industry chooses Clickdee?</h2>
    </div>
    <p>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
  </div>
  <div class="choose-right">
    <div className="container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <div className="card-title">{card.title}</div>
            <div className="description">{card.description}</div>
          </div>
          
        </div>
      ))}
      </div>
    <div className="container">
      {cardsDataa.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <div className="card-title">{card.title}</div>
            <div className="description">{card.description}</div>
          </div>
          
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
