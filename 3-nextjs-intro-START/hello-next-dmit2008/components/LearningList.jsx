// our new component
// we have one prop here called title.
// we add a second prop called children (which is special)
export default function LearningList(
    {title, itemsLearned, children}
) {
    return <div>
        <h2>things we've learned about: {title}</h2>
        {/* this is going to be a description that we're going add. */}
        {children}
        {/* we're going to loop through the elements */}
        <ul>
            {/* render the itemsLearned a listitem
            using your of lists */}

        </ul>


    </div>
}