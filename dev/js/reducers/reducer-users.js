/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [

        {
            id: 1,
            first: "Maxx",
            last: "Flinn",
            age: 17,
            description: "Loves basketball",
            thumbnail: "https://goo.gl/1KNpiy"
        },
        {
            id: 2,
            first: "Allen",
            last: "Matt",
            age: 25,
            description: "Food Junky.",
            thumbnail: "https://goo.gl/rNLgwv"
        },
        {
            id: 3,
            first: "Kris",
            last: "Chen",
            age: 23,
            description: "Music Lover.",
            thumbnail: "https://goo.gl/EVbPHb"
        }
    ]
}
