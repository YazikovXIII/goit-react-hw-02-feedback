// import React, { Component } from 'react';

// export class Something extends Component {
//   state = {
//     name: 'Test',
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onButtonClick = data => {
//     console.log(data);
//     if (data === 'good') {
//       const newGoodValue = this.state.good + 1;
//       this.setState({ good: newGoodValue });
//       console.log('Data is Good');
//     } else if (data === 'bad') {
//       const newBadValue = this.state.bad + 1;
//       this.setState({ bad: newBadValue });
//       console.log('Data is Bad');
//     } else if (data === 'neutral') {
//       const newNeutralValue = this.state.neutral + 1;
//       this.setState({ neutral: newNeutralValue });
//       console.log('Data is Neutral');
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h2>{this.state.name}</h2>
//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//         <button onClick={() => this.onButtonClick('good')}>Good</button>
//         <button onClick={() => this.onButtonClick('neutral')}>Neutral</button>
//         <button onClick={() => this.onButtonClick('bad')}>Bad</button>
//       </div>
//     );
//   }
// }

// ______________________________________________________________________________________

// import React, { Component } from 'react';

// export class Something extends Component {
//   state = {
//     name: 'Test',
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onButtonClick = type => {
//     this.setState(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const { name, good, neutral, bad } = this.state;

//     return (
//       <div>
//         <h2>{name}</h2>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <button onClick={() => this.onButtonClick('good')}>Good</button>
//         <button onClick={() => this.onButtonClick('neutral')}>Neutral</button>
//         <button onClick={() => this.onButtonClick('bad')}>Bad</button>
//       </div>
//     );
//   }
// }

// ---------------------------------------------------------------------------------

import React, { Component } from 'react';

export class Something extends Component {
  state = {
    title: 'Please leave feadback',
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? ((good / total) * 100).toFixed(2) : 0; // If total is 0 return 0 to avoid division by 0
  };

  render() {
    const { title, good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>{title}</h2>
        <button onClick={() => this.onButtonClick('good')}>Good</button>
        <button onClick={() => this.onButtonClick('neutral')}>Neutral</button>
        <button onClick={() => this.onButtonClick('bad')}>Bad</button>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}
