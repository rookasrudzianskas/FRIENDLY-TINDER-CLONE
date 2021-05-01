import React, {useEffect, useState} from "react";
import "./styles/TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "../firebase";

const TinderCards = () => {
    // State with array of many people on the cards
    // from there the mapping function will take a person info, each object is one person
    const [people, setPeople] = useState([]);

    // Piece of code which runs on the condition
    useEffect(() => {
        // this is there the code runs
        // this will run once then the component loads and never ever again
        // to connect to the database collection called people
        // I want to listen to everything what changes in people -> documents, we add the listener to listen for all changes
        // we get an access there to the documents in people collection
        // snapshot captures all the things which are in the people collection and return as the snapshot, so in this case
        // alll three in the people collection
        // snapshot.docs are the people objects inside, that .docs, is the objects with AutoIDS in the people collection
        // we capture the database, go to the autoIDs objects and go per each one, and take all the data assosiated with that ID!
        // data is Jeff Bezos and the url for example
        database.collection('people').onSnapshot(snapshot => (
            // and we set all the people with auto IDS to the state people here, using the setPeople
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))

    }, []);

    return (
        <div>
            <div className="tinderCards__cardContainer">
            {/* we go per each person in people, and render the Tinder Card */}
            {people.map((person) => (
                // key is required as the unique intensifier for each object
                // preventSwipe, takes the aray of the sides you do not want the app to let you to swipe in
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                    <div
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;