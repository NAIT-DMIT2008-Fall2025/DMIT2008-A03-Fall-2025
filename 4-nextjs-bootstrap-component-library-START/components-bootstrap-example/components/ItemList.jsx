// let's import the ListGroup from react
import ListGroup from 'react-bootstrap/ListGroup';


// because I want my component to be called like so in the jsx
// <ItemList items={UI_LIBRARY} title={"Awesome libraries"} />
// we're going to need two props: items and title
export default function ItemList({items, title}) {

    // like every component I'm going to return a single jsx Node
    return <div>
        {/* I want to define a title i'll but that in a h2 */}
        <h2>{title}</h2>
        {/* Let's create the list using react bootstrap */}
        <ListGroup>
            {/* we're going to have a list of items that
                with map there's two options
                option 1
                items.map((item, index) => { return //...jsx here });

                option 2 (implies the return)
                items.map((item, index) => (//...jsx here));
            */}

            {items.map((item, index) => {
                // item is an object
                // console.log(item)
                // we're going to return a ListGroup.Item for each
                return <ListGroup.Item
                    key={index}
                >
                    {/* let's make this a link */}
                    <a href={item.url} target="_blank">

                        {item.name}
                    </a>
                </ListGroup.Item>
            })}
        </ListGroup>
    </div>

}