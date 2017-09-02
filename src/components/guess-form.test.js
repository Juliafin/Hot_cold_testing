import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';


describe('<GuessForm />', () => {

  it('Renders without error', () => {
    shallow(<GuessForm />);
  });

  it('Calls the callback when the form is submitted', () => {
    const callback = jest.fn();
    const formFullRender = mount(<GuessForm onGuess={callback} />);
    const value = "some value";
    formFullRender.find('input[type="text"]').node.value = value;
    formFullRender.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  })


  it('Should not fire the callback when the form is empty', () => {
    const callback = jest.fn();
    const fullformRender = mount(<GuessForm onGuess={callback} />);
    fullformRender.simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  })

  it('Should render two input components and one label component', () => {
    const shallowForm = shallow(<GuessForm />);
    expect(shallowForm.find('input')).toHaveLength(2);
    expect(shallowForm.find('label')).toHaveLength(1);
  })
  
})