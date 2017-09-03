import React from 'react';
import {mount, shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal/>', () => {

  it ('Should render without error', () => {
    shallow(<InfoModal />);
  })

  it ('Should render all the text correctly', () => {
    const shallowModal = shallow(<InfoModal />);
      const listTexts = shallowModal.find('div.content div li').map(listItem => listItem.text());
      expect(listTexts).toEqual(["1. I pick a random secret number between 1 to 100 and keep it hidden.", "2. You need to guess until you can find the hidden secret number.", `3. You will get feedback on how close ("hot") or far ("cold") your guess is.`])
  })

  it('Should render an <a> with "close" class', () => {
    const shallowModal = shallow(<InfoModal />);
     expect(shallowModal.find('a.close')).toHaveLength(1);
  })
})