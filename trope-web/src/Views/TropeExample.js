import HebrewWord from "./HebrewWord.js"

function TropeExample({name, glyph, hebrew}) {
    return <span>
        <div>{name}</div>
        <div>{glyph}</div>
        <HebrewWord text={hebrew}/>
    </span>
}

export default TropeExample;