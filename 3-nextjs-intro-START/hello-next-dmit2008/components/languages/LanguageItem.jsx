// the specific items we're going to loop over in the
// FavouriteLanguages component.
export default function LanguageItem({language}) {
    // in html components in react we use className
    // rather than class
    return <li className="text-blue-600">
        {language}
    </li>
}