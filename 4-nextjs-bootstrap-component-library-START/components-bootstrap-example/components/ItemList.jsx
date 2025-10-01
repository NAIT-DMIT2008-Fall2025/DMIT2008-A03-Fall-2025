
// because I want my component to be called like so in the jsx
// <ItemList items={UI_LIBRARY} title={"Awesome libraries"} />
// we're going to need two props: items and title
export default function ItemList({items, title}) {

    // like every component I'm going to return a single jsx Node
    return <div>
        {/* I want to define a title i'll but that in a h2 */}
        <h2>{title}</h2>

    </div>

}