import React, { Fragment, useState } from "react";
import { Card, Checkbox, FloatButton, Progress, Space, Typography } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Confetti from 'react-confetti';


const Page: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const { Title } = Typography;

  const checklist = [
    { key: 1, title: "Learn to Ride a Bicycle" },
    { key: 2, title: "Build the Perfect Treehouse" },
    { key: 3, title: "Catch a Firefly" },
    { key: 4, title: "Visit Disneyland" },
    { key: 5, title: "Learn to Swim" },
    { key: 6, title: "Win a School Prize" },
    { key: 7, title: "Make a Best Friend" },
    { key: 8, title: "Go Camping in the Wilderness" },
    { key: 9, title: "Have a Sleepover Party" },
    { key: 10, title: "Be in a School Play" },
    
    { key: 11, title: "Get Your First Job" },
    { key: 12, title: "Travel with Friends" },
    { key: 13, title: "Learn to Drive" },
    { key: 14, title: "Graduate High School" },
    { key: 15, title: "Have a First Love" },
    { key: 16, title: "Get Into Your Dream College" },
    { key: 17, title: "Learn a New Language" },
    { key: 18, title: "Take a Solo Trip" },
    { key: 19, title: "Volunteer for a Cause" },
    { key: 20, title: "Run a Marathon" },
    
    { key: 21, title: "Start Your Career" },
    { key: 22, title: "Move to a New City" },
    { key: 23, title: "Live Alone" },
    { key: 24, title: "Take a Cross-Country Road Trip" },
    { key: 25, title: "Go to a Music Festival" },
    { key: 26, title: "Invest in a Hobby You Love" },
    { key: 27, title: "Find Your Mentor" },
    { key: 28, title: "Start Saving for Retirement" },
    { key: 29, title: "Own Your First Car" },
    { key: 30, title: "Take a Cooking Class" },
  
    { key: 31, title: "Buy Your First Home" },
    { key: 32, title: "Travel Abroad for an Extended Stay" },
    { key: 33, title: "Start a Family" },
    { key: 34, title: "Get a Degree or Certification" },
    { key: 35, title: "Own Your Own Business" },
    { key: 36, title: "Reconnect with Old Friends" },
    { key: 37, title: "Write a Book or Blog" },
    { key: 38, title: "Complete a Major Home Renovation" },
    { key: 39, title: "Attend a TED Talk or Inspirational Conference" },
    { key: 40, title: "Give a Public Speech" },
    
    { key: 41, title: "Travel to Every Continent" },
    { key: 42, title: "Take a Family Vacation" },
    { key: 43, title: "Learn an Instrument" },
    { key: 44, title: "Have a Personal Retreat" },
    { key: 45, title: "Host a Big Family Celebration" },
    { key: 46, title: "Mentor Someone" },
    { key: 47, title: "Create a Legacy Project" },
    { key: 48, title: "Take a Dance Class" },
    { key: 49, title: "Volunteer Overseas" },
    { key: 50, title: "Revisit Your Childhood Home" },
    
    { key: 51, title: "Start a New Hobby" },
    { key: 52, title: "Create a Family Tree" },
    { key: 53, title: "Travel to a Dream Destination" },
    { key: 54, title: "See Your Grandchildren Grow" },
    { key: 55, title: "Write Letters to Your Future Generations" },
    { key: 56, title: "Take a Scenic Train Journey" },
    { key: 57, title: "Learn to Meditate" },
    { key: 58, title: "Revisit an Old Dream" },
    { key: 59, title: "Build a Legacy Fund" },
    { key: 60, title: "Plan Your End-of-Life Wishes" },
    
    { key: 61, title: "Learn to Let Go of Negativity" },
    { key: 62, title: "Stay Fit and Healthy" },
    { key: 63, title: "Give Without Expectation" },
    { key: 64, title: "Cultivate Gratitude" },
    { key: 65, title: "Forgive Yourself" },
    { key: 66, title: "Be Financially Free" },
    { key: 67, title: "Have a Purpose" },
    { key: 68, title: "Develop Strong Relationships" },
    { key: 69, title: "Embrace Failure as a Lesson" },
    { key: 70, title: "Celebrate Milestones" },
    
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCheckboxChange = (key: number, checked: boolean) => {
    setSelectedCards(prevState => {
      if (checked) {
        return [...prevState, key];
      } else {
        return prevState.filter(item => item !== key);
      }
    });
  };

  const progress = parseFloat(((selectedCards.length / checklist.length) * 100).toFixed(4));

  const handleCardClick = (key: number) => {
    const isChecked = selectedCards.includes(key);
    handleCheckboxChange(key, !isChecked);
  };
  
  const allCardsSelected = selectedCards.length === checklist.length;

  return (
    <Fragment>
        <Space className="header">Life Checklist</Space>
        <Progress percent={progress} status="active" percentPosition={{ align: 'center', type: 'inner' }} size={[1000, 30]} style={{top: 10}} />


        {allCardsSelected && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Title level={2}>🎉 All Goals Achieved! 🎉</Title>
            <p style={{ fontSize: '20px' }}>Congratulations! You've completed all your goals!</p>
          </div>
        </>
      )}

        <div className="card-container">
        {checklist.map((item) => (
          <Card
            className="styled-card"
            key={item.key}
            hoverable
            style={{ position: 'relative' }}
            onClick={() => handleCardClick(item.key)} 
          >
            <Checkbox
              checked={selectedCards.includes(item.key)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
              onChange={(e) => handleCheckboxChange(item.key, e.target.checked)}
            />
            <div className="card-content">{item.title}</div>
          </Card>
        ))}
      </div>

      <FloatButton
          onClick={scrollToTop}
           icon={ <ArrowUpOutlined/>}
      />
         
    </Fragment>  
);
};

export default Page;
