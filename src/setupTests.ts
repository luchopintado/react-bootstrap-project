// This file is used by default by the Jest config to setup the test environment
/* tslint:disable */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
