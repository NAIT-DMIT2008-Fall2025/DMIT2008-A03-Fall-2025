import { fireEvent, render, act, screen} from '@testing-library/react';
// render will render the components
// act will do more complex state changes
// fireEvent this hany for inputs to fire a certain change event
// screen this is going to be how you select things on the page.

import '@testing-library/jest-dom'
// this is going to give us some handy matchers that allow us
// to test javascript elements

import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('todo rendered successfully', () => {
    render(<TodoList/>)

    // docs for selecting things
    // https://testing-library.com/docs/queries/about/#screen

    const titleElement = screen.getByText(
      'Our Todo List'
    )

    // toBeInTheDocument is part of larger set
    // of matchers on expect that you can add.
    // docs: https://github.com/testing-library/jest-dom
    expect(titleElement).toBeInTheDocument()
    // a quick way to make your tests fail
    // before you make them pass is to add the
    // .not. before your matcher.
    // expect(titleElement).not.toBeInTheDocument()
    // after the above fails you can just remove it
    // I'm leaving this here for context so that
    // you folks have a quick way to check that your
    // test works.
  })

  // create a test that's going to
  // render the component
  // your select the inputElement by getLabelText
  // get the button with getByText
  // check if they're in the document.
})