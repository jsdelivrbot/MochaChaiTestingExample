import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

// we want to make sure CommentBox has a textarea, button, and the textarea updates as user is typing
describe('CommentBox', () => {
  let component;

  // a function that runs before any of the 'it' statements and will run before each of them runs, so it will get called as many times as there are 'it' statements
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the class "comment-box"', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the text area', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when comment is submitted, input is cleared', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
