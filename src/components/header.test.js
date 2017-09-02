import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  
  it('Should render without error', () => {
    shallow(<Header/>)
  })

  it('Should not render infoModal by default', () => {
    const shallowHeader = shallow(<Header />);
    expect(shallowHeader.find('InfoModal')).toHaveLength(0);
  })

  it('Should render infoModal when the state is toggled', () => {
    const shallowHeader = shallow(<Header />);
    shallowHeader.instance().toggleInfoModal();
    expect(shallowHeader.find('InfoModal')).toHaveLength(1);
  })

  it('Should render a topNav component', () => {
    const shallowHeader = shallow(<Header />) ;
    expect(shallowHeader.find('TopNav')).toHaveLength(1);
  })

  it ('Should render an H1 element with the text: HOT or COLD', () => {
    const shallowHeader = shallow(<Header />);
    expect(shallowHeader.find('h1').text()).toBe('HOT or COLD');
  })

})