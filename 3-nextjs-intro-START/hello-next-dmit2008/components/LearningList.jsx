// our new component
// we have one prop here called title.
// we add a second prop called children (which is special)
export default function LearningList({title, children}) {
    return <div>
        <h2>things we've learned about: {title}</h2>
        {/* we're going to open and close the javascript tags */}
        {children}
    </div>
}