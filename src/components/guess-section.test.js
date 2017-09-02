import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe ('<GuessSection/>', () => {
  
  it('Should render without error', () => {
    shallow(<GuessSection feedback="Some random feedback" onGuess={jest.fn()} />)
  })

  it ('Should render text as passed through props', () => {
    const feedback = "This test is passing";
    const shallowGuessSection = shallow(<GuessSection feedback={feedback} onGuess={jest.fn()} />)

    expect(shallowGuessSection.find('h2#feedback').text()).toEqual(feedback);
  })

})