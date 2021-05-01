import React, {useState} from "react";
import "./styles/TinderCards.css";
import TinderCard from "react-tinder-card";


const TinderCards = () => {
    // State with array of many people on the cards
    // from there the mapping function will take a person info, each object is one person
    const [people, setPeople] = useState([
        {
        name: "Rokas Rudzianskas",
        url: 'https://pbs.twimg.com/profile_banners/1335523704227454976/1610913501/1500x500',
        },
        {
            name: "Mark Zuckerberg",
            url: 'https://i.insider.com/5ec7fcf62618b96a58135c38?width=700',
        },
    ]);

    return (
        <div>
            {/* we go per each person in people, and render the Tinder Card */}
            {people.map((person) => (
                // key is required as the unique intensifier for each object
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                    <div
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;