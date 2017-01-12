import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

// we want to make sure CommentBox has a textarea, button, and the textarea updates as user is typing
describe('CommentBox', () => {
  it('has the class "comment-box"', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  })

  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
