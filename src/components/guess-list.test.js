import React from 'react';
import {mount, shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {

  it('Should render without errors', () => {
    shallow(<GuessList guesses={[1,2,3]} />);
  })

  it('Should render a list provided with the matching length of the array', () => {
    const listArray = []
    const randomArrayLength = Math.floor(Math.random() * 10);
    for (let i=0;i<randomArrayLength;i++) {
      listArray.push(Math.floor(Math.random() * 10))
    }
    console.log(listArray);
    const shallowList = shallow(<GuessList guesses={listArray} />)
    expect(shallowList.find('li')).toHaveLength(randomArrayLength);
  })
})