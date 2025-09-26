// import the LanguageItem component
import LanguageItem from "./LanguageItem"

export default function FavouriteLanguages({ languages }) {

    // ordered list
    return <ol>
        {/* render the list item */}
        {languages.map((lang, index) => {
            // below where it says language={lang}
            // lang is the actual list item
            // language=... is the prop to the LanguageItemComponent
            return <LanguageItem
                key={index}
                language={lang}
            />
        })}
    </ol>
}