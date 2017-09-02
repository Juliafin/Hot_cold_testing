import React from 'react';
import {mount, shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal/>', () => {

  it ('Should render without error', () => {
    shallow(<InfoModal />);
  })

  
})