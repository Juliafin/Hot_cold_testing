import React from 'react';
import {mount, shallow} from 'enzyme';

import GuessCount from './guess-count';

describe ('< GuessCount/>', () => {


  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it ('Has an id called "count"', () => {
    const renderedComp = shallow(<GuessCount count={1} />)
    expect(renderedComp.find('#count')).toHaveLength(1);
  })

  it ('Renders the props count correctly', () => {
    const number = 3;
    const renderedComp = shallow(<GuessCount count={number} />);
    console.log(renderedComp.instance().props.count);


    expect(renderedComp.instance().props.count).toBe(number)
  })

  it ('Component contains appropriate nodes', () => {
    const renderedComp = shallow(<GuessCount count="3" />)
  
    expect(renderedComp.contains([<span id="count">3</span>])).toBe(true);
  })
});

