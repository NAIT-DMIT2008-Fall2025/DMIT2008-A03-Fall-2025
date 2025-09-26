// the specific items we're going to loop over in the
// FavouriteLanguages component.
export default function LanguageItem({language}) {
    return <li className="text-blue-600">
        {language}
    </li>
}