import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: { fontSize: 24, paddingTop: 16, marginBottom: 12, fontWeight: 400 },
  slide: { padding: 10, height: '100%' },
};

export default class TabsExampleSwipeable extends React.Component {
  state = { slideIndex: 0 };

  handleChange = value => {
    this.setState({ slideIndex: value });
  };

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            Ullas 
          </div>
          <div style={styles.slide}>
            Anant
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

