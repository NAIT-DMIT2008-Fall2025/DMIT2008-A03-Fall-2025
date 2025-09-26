// we're going to import this file using the @ which is
// the base of our react project
import LearningList from "@/components/LearningList";
// just a note here, there's no {} around LearningList
// that is because it's a default export

// we'll see this a bit later on but pages
// in the app and pages router of next.js are
// are also components.
export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Over here this is returning JSX */}
        <h1>Our First React App</h1>
        {/* below here we're going to use our component */}
        <LearningList
          title="next.js"
          itemsLearned={[
            "setting it up in the terminal",
            "the modules installed",
            "create-next-app"
          ]}
        />
        {/* Looking below we can see
        that passing in children is optional. */}
        <LearningList
          title="components"
          itemsLearned={[
            "props and how normally they're destructured",
            "children prop how it's special like dan.",
            "lists and how we need to map and add a key that is unique",
            "you can have components in components in components",
          ]}
        >
          <ul>
            <li>Components take props</li>
            <li>"children" is a special prop that allows you to wrap other components</li>
          </ul>
        </LearningList>
      </main>

    </div>
  );
}
