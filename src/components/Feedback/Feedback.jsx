import { Component } from 'react';
import Statistics from './Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnBtn = e => {
    console.dir(e.currentTarget.name);

    // this.setState(prevState => {
    //   console.log(prevState[e.currentTarget.name]);
    // });
  };

  clickOnBtnGood = () => {
    this.setState(prevState => {
      const good = prevState.good;
      return {
        good: good + 1,
      };
    });
  };

  clickOnBtnNeutral = () => {
    this.setState(prevState => {
      const neutral = prevState.neutral;
      return {
        neutral: neutral + 1,
      };
    });
  };

  clickOnBtnBad = () => {
    this.setState(prevState => {
      const bad = prevState.bad;
      return {
        bad: bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let sum = 0;
    for (let feedBack of Object.values(this.state)) {
      sum += feedBack;
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    return `${
      Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
    }%`;
  };

  render() {
    return (
      <div>
        <h2>Please leave feadback</h2>
        {/* <button type="button" onClick={this.clickOnBtn}>
          Good
        </button>
        <button type="button" onClick={this.clickOnBtnNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.clickOnBtnBad}>
          Bad
        </button> */}
        {Object.keys(this.state).map(item => (
          <button
            type="button"
            name={item}
            onClick={this.clickOnBtn}
            key={item}>
            {item}
          </button>
        ))}
        <Statistics
          title={'Statistics'}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          totalFeedbacks={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
