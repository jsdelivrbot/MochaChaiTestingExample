import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/App';

// use 'describe' to group together similar tests
describe('App', () => {

  // use 'it' to test a single attribute of a target
  // the string is used as guidance/documentation
  it('shows the correct text', () => {

    // create an instance of App
    const component = renderComponent(App);

    // use 'expect' to make an 'assertion' about a target
    // target being the App component
    expect(component).to.contain('React simple starter');

  });

});
