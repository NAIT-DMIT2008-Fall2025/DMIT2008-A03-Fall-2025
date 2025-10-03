// I'm going give you two minutes
// if you can use react bootstrap
// have a container
// a title (h1)
// a row with two columns in it

// let's import the component from react bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// let's import our component
import ItemList from '@/components/ItemList';

export default function Home() {
  const UI_LIBRARY_LIST = [
    {
      name: "MUI",
      url: "https://mui.com/"
    },
    {
      name: "React Bootstrap (the one we're looking at)",
      url: "https://react-bootstrap.github.io/"
    },
    {
      name: "Ant Design",
      url: "https://ant.design/docs/react/introduce"
    },
    {
      name: "Semantic UI",
      url: "https://react.semantic-ui.com/"
    },
    {
      name: "Acernity UI",
      url: "https://ui.aceternity.com/"
    },
    {
      name: "Shadcn UI",
      url: "https://ui.shadcn.com/"
    },
  ]

  const AWESOME_FRAMEWORKS = [
    {name:'react', url: "https://react.dev/"},
    {name:'next.js', url: "https://nextjs.org/"},
  ]

  return (
    <Container>
      <main>
        <h1>React bootstrap example</h1>
        <Row>
          <Col>
            {/* I want you folks to use list groups in a component
              named ItemList, and I want you to create this in
              a folder called "components"
              <ItemList items={UI_LIBRARY_LIST} title={"Awesome libraries"} />
            */}
            <ItemList
              items={UI_LIBRARY_LIST}
              title={"Awesome libraries"}
            />
            {/* An easy way to think about jsx
            is that it's calling your component like this
            ItemList({
              items: UI_LIBRARY_LIST,
              title: "Awesome libraries"
            })
            */}
          </Col>
          <Col>
            <ItemList
              items={AWESOME_FRAMEWORKS}
              title={"Some good JS Frameworks"}
            />
          </Col>
        </Row>
      </main>
    </Container>
  );
}










