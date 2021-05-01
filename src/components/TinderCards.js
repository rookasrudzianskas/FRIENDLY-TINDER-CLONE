import React, {useState} from "react";
import "./styles/TinderCards.css";
import TinderCard from "react-tinder-card";


const TinderCards = () => {
    // State with array of many people on the cards
    // from there the mapping function will take a person info, each object is one person
    const [people, setPeople] = useState([
        {
        name: "Rokas Rudzianskas",
        url: ,
        },
        {
            name: "Rokas Rudzianskas",
            url: ,
        }
    ]);

    return (
        <div>
            {/* we go per each person in people, and render the Tinder Card */}
            {people.map((person) => {
                <TinderCard />
            })}
        </div>
    )
}

export default TinderCards;