import React, { useState } from "react";

import Statistics from "../statistics/Statistics";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../section/SectionTitle";

import { Container } from "../App/App.styled";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (target) => {
    switch (target) {
      case "good":
        setGood((state) => state + 1);
        return;
      case "neutral":
        setNeutral((state) => state + 1);
        return;
      case "bad":
        setBad((state) => state + 1);
        return;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 && Math.round((good / total) * 100);
  };
  return (
    <Container>
      <Section title=" Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={{ good, neutral, bad }}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
}
/* class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 && Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <Container>
        <Section title=" Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={this.state}
          />

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
} */

//export default App;
