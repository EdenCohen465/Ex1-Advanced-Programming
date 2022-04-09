import avi from './userPhotos/avi.webp';
import eiffelTower from './userPhotos/eiffelTower.webp';
import israel from './userPhotos/israel.webp';
import sunset from './userPhotos/sunset.jpg';
import sunflower from './userPhotos/sunflower.jpg';

const usersList = [
    {
        username: "admin", nickname: "admin", public_photo: sunflower, password: "admin1", friendsMessagesHistory:
            [{ username: "ronioded", messagesHistory: [{ time: "10:00", message: "heyyyyy", displayMessage: "heyyyyy", type: "text", iSent: true }, { time: "10:30", message: "llllllllllll", displayMessage: "llllllllllll", type: "text", iSent: false }, { time: "12:00", message: "oooooo", displayMessage: "oooooo", type: "text", iSent: true }] },
            { username: "edencohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "israelisraeli", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "avicohen", messagesHistory: [{ time: "12:00", message: "How Are You?", displayMessage: "How Are You?", type: "text", iSent: true }, { time: "12:05", message: "Good, thanks!:)", displayMessage: "Good, thanks!:)", type: "text", iSent: false }] },
            { username: "tallevi", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }]
    },
    {
        username: "ronioded", nickname: "roniz", public_photo: sunset, password: "roniz1", friendsMessagesHistory:
            [{ username: "admin", messagesHistory: [{ time: "10:00", message: "heyyyyy", displayMessage: "heyyyyy", type: "text", iSent: false }, { time: "10:30", message: "llllllllllll", displayMessage: "llllllllllll", type: "text", iSent: true }, { time: "12:00", message: "oooooo", displayMessage: "oooooo", type: "text", iSent: false }] },
            { username: "edencohen", messagesHistory: [{ time: "16:54", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: true }, { time: "16:58", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: false }] },
            { username: "israelisraeli", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "avicohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "tallevi", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }]
    },
    {
        username: "edencohen", nickname: "eden gaoniz", public_photo: eiffelTower, password: "edenz1", friendsMessagesHistory:
            [{ username: "admin", messagesHistory: [{ time: "10:00", message: "heyyyyy", displayMessage: "", type: "text", iSent: "" }, { time: "10:00", message: "heyyyyy", displayMessage: "", type: "text", iSent: "" }, { time: "12:00", message: "oooooo", displayMessage: "", type: "text", iSent: "" }] },
            { username: "ronioded", messagesHistory: [{ time: "16:54", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: false }, { time: "16:58", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: true }] },
            { username: "israelisraeli", messagesHistory: [{ time: "03:00", message: "Good night", displayMessage: "Good night", type: "text", iSent: true }, { time: "03:10", message: "Happy Dreams!!", displayMessage: "Happy Dreams!!", type: "text", iSent: false }] },
            { username: "avicohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "tallevi", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }]
    },
    {
        username: "israelisraeli", nickname: "Israel", public_photo: israel, password: "israel1", friendsMessagesHistory:
            [{ username: "admin", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "ronioded", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "edencohen", messagesHistory: [{ time: "03:00", message: "Good night", displayMessage: "Good night", type: "text", iSent: false }, { time: "03:10", message: "Happy Dreams!!", displayMessage: "Happy Dreams!!", type: "text", iSent: true }] },
            { username: "avicohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "tallevi", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }]
    },
    {
        username: "avicohen", nickname: "avi", public_photo: avi, password: "avi1", friendsMessagesHistory:
            [{ username: "admin", messagesHistory: [{ time: "12:00", message: "How Are You?", displayMessage: "How Are You?", type: "text", iSent: false }, { time: "12:05", message: "Good, thanks!:)", displayMessage: "Good, thanks!:)", type: "text", iSent: true }] },
            { username: "ronioded", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "edencohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "israelisraeli", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "tallevi", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }]
    },
    {
        username: "tallevi", nickname: "talevi", public_photo: sunflower, password: "tal1", friendsMessagesHistory:
            [{ username: "admin", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "ronioded", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "edencohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "israelisraeli", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] },
            { username: "avicohen", messagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }]
    },
    { username: "guy", nickname: "guy", public_photo: sunflower, password: "tal1", friendsMessagesHistory: [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }] }
];

export default usersList;