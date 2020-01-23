import React, { Component } from 'react';
import Nav from '../components/Nav';

class Radio extends Component {

  state= {
    skillLevel: ''
  }

  handleSkillLevelChange = (e) => {
    const skillLevel = e.target.value;
    this.setState({ skillLevel });
  };

  render() {
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    return (
      <section className="">
        <Nav />
        <h1>Radio</h1>
        <form>
          <label>
            <input
              value="BEGINNER"
              checked={this.state.skillLevel === 'BEGINNER'}
              onChange={this.handleSkillLevelChange}
              type="radio" />
              Beginner
          </label>
          <label>
            <input
              value="INTERMEDIATE"
              checked={this.state.skillLevel === 'INTERMEDIATE'}
              onChange={this.handleSkillLevelChange}
              type="radio" />
              Intermediate
          </label>
          <label>
            <input
              value="ADVANCED"
              checked={this.state.skillLevel === 'ADVANCED'}
              onChange={this.handleSkillLevelChange}
              type="radio" />
              Advanced
          </label>
        </form>
        {/* <form>
          {levels.map((level, index) =>
            <label key={index}>
              <input
                value={level.toUpperCase()}
                checked={this.state.skillLevel === level.toUpperCase()}
                onChange={this.handleSkillLevelChange}
                type="radio" />
                 {level}
            </label>
          )}
        </form> */}

        <p>{this.state.skillLevel}</p>
      </section>
    );
  }
}

export default Radio;
