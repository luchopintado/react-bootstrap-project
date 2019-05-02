import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ColoredButton from './ColoredButton';

describe('<ColoredButton />', () => {
  let wrapper: ShallowWrapper;
  let title: string;

  
  beforeAll(() => {
    title = 'Some random title';
    wrapper = shallow(<ColoredButton title={title} />);
  });

  it('Should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should display the title correctly', () => {
    expect(wrapper.contains(title)).toBe(true);
  });
});
