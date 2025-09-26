// remember that components use PascalCase
// one good rule to follow is that your component
// names should have the same name as the file.
export default function LearningListItem({ text }) {
    // above we have one prop of text
    // usage of this component looks like this (In jsx)
    // <LearningListItem text="yay" />

    // we're going to return jsx of the listitem
    // IMPORTANT: a component can only render a
    // single node
    return <li style={ // note this is used for styling sometimes
            {color: "aquamarine"}
        }
    >
        {/* the text is the prop that is passed */}
        {text}
    </li>

}