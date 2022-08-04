import React from 'react';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  totalFeedbacks,
  positiveFeedback,
}) => (
  <div>
    <h2>{title}</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {totalFeedbacks}</p>
    <p>Positive feedback: {positiveFeedback}</p>
  </div>
);

export default Statistics;
