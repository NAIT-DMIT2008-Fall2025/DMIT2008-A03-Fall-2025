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
  test('renders button and input element', () => {
    // render the todolist
    render(<TodoList />)
    // your select the inputElement by getLabelText
    const inputElement = screen.getByLabelText("New Todo")
    // get the button with getByText
    const button = screen.getByText("Add Todo")
    // check if they're in the document.
    // made it fail first
    // expect(inputElement).not.toBeInTheDocument()
    // expect(button).not.toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  // we're going to write a test
  test('todo item added successfully on button click', () => {
    // render the todolist
    render(<TodoList />)
    // gets all the elements from above.
    const inputElement = screen.getByLabelText("New Todo")
    // get the button with getByText
    const button = screen.getByText("Add Todo")
    // let's get the list element from the data-testid prop
    // which does nothing except allows to select it in our
    // tests
    const listElement = screen.getByTestId("todo-item-list")
    // update the input with some text
    const EXPECTED_STRING = "get excited about testing in js"
    // this is going fire the onTodoTextChange in the TodoList
    fireEvent.change( // this fires the change event
      inputElement, // this is the element to fire on.
      { // a simulated event object
        target: {
          value: EXPECTED_STRING
        }
      }
    )

    // check to see if the input has thet
    // make it fail first
    // expect(inputElement.value).not.toBe(EXPECTED_STRING)
    // make it pass
    expect(inputElement.value).toBe(EXPECTED_STRING)
    // we're going to click the button
    // for more complex state changes
    act(()=> {
      button.click()
    })
    // after the button click
    // the input should have no value
    expect(inputElement.value).toBe('')
    // list element should have text.

    expect(listElement).toHaveTextContent(EXPECTED_STRING)
  })
})











