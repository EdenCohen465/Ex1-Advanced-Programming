import avi from '../userPhotos/avi.webp';
import eiffelTower from '../userPhotos/eiffelTower.webp';
import israel from '../userPhotos/israel.webp';
import sunset from '../userPhotos/sunset.jpg';
import sunflower from '../userPhotos/sunflower.jpg';

// last message, time needs eden to update for me

const message1 = { time: "10:00", m: "heyyyyy"}
const chatsListDefault = [
    { nickname: "Roni Oded", photo: sunset, messagesHistory: [{ time: "10:00", m: "heyyyyy" }, { time: "10:30", m: "llllllllllll" }, { time: "12:00", m: "oooooo"}]}, 
    { nickname: "Eden Cohen", photo: eiffelTower, messagesHistory: [{ time: "", m: "" }]},
    { nickname: "Israel Israeli", photo: israel, messagesHistory: [{ time: "", m: "" }]},
    { nickname: "Avi Cohen", photo: avi, messagesHistory: [{ time: "", m: "" }]},
    { nickname: "Tal Levi", photo: sunflower, messagesHistory: [{ time: "", m: "" }]}
];

export default chatsListDefault;