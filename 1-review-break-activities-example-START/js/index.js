/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// try doing steps 1-3
// we're going to select the new topic form and the topic list
let topicList = document.querySelector(".topics-list")

let newTopicForm = document.querySelector(".new-topic-form")

// we're going to pass in the value the function
const addTopicToPage = (value) => {
  // continously add to the list on the innerHTML
  topicList.innerHTML += `<li class="list-group-item">
      ${value}
  </li>`
}



// we're listening to the "submit" event
// pass in the event objects
newTopicForm.addEventListener("submit", (event)=>{
  // we're going to stop the form from submitting
  event.preventDefault()
  // we're also going to stop propogating
  event.stopPropagation()

  // to select the input elements we're going to use the .elements on the
  // form so here "event.target" is the same as "newTopicForm"
  let topicElement = event.target.elements["new-topic"]
  // I'm going to console log the value
  console.log(topicElement.value)

  // I want you to validate the inputs
  // if it isn't valid I want you to add the "is-invalid" class to the topicElement
  // if it is valid I want you to call a function that you'll create
  // called add topic page that uses the string template and
  // adds it on the list.

  // validate to make sure that the element isn't empty
  if (topicElement.value === "") {
    // I'm going to add the class to the element
    topicElement.classList.add("is-invalid")
    // i'm going return early because, it's invalid
    // I don't want to do anything else
    return // if this is hit nothing under it will executed
  }

  // everything below is going to be valid
  console.log("if invalid this will never show.")
  // remove the class is-invalid
  topicElement.classList.remove("is-invalid")

  // let's add the element to page
  // were going to pass in the value
  addTopicToPage(topicElement.value)

  // let's reset the input
  topicElement.value = ""
})