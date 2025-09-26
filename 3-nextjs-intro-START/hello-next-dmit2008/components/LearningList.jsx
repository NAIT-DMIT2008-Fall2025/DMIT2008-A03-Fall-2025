// let's import our LearningListItem

// our new component
// we have one prop here called title.
// we add a second prop called children (which is special)
export default function LearningList(
    {title, itemsLearned, children}
) {
    // remember that comments in the javascript look like
    // this with the two in slashes in front
    // the comments in your JSX are going to look like
    // {/* this */}
    return <div>
        <h2>things we've learned about: {title}</h2>
        {/* this is going to be a description that we're going add. */}
        {children}
        {/* we're going to loop through the elements */}
        <ul>
            {/* render the itemsLearned a listitem
            using your of lists */}
            {itemsLearned.map((item, index)=> {
                // our map is returning a modified version
                // of the array and returning jsx.
                return <li
                    key={index}
                    style={ // note this is used for styling sometimes
                        {color: "blue"}
                    }
                >{item}</li>
            })}
        </ul>


    </div>
}