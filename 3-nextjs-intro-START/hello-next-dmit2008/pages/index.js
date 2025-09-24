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
        <LearningList title="next.js" />
        {/* Looking below we can see
        that passing in children is optional. */}
        <LearningList title="components">
          <ul>
            <li>Components take props</li>
            <li>"children" is a special prop that allows you to wrap other components</li>
          </ul>
        </LearningList>
      </main>

    </div>
  );
}
