import avi from '../userPhotos/avi.webp';
import eiffelTower from '../userPhotos/eiffelTower.webp';
import israel from '../userPhotos/israel.webp';
import sunset from '../userPhotos/sunset.jpg';
import sunflower from '../userPhotos/sunflower.jpg';

// last message, time needs eden to update for me
const chatsListDefault = [
    { nickname: "Roni Oded", photo: sunset , lastMessage: "hey", lastMessageTime: "1", messagesHistory : []}, 
    { nickname: "Eden Cohen", photo: eiffelTower, lastMessage: "hey you", lastMessageTime: "1", messagesHistory: []},
    { nickname: "Israel Israeli", photo: israel, lastMessage: "hey you", lastMessageTime: "1", messagesHistory: []},
    { nickname: "Avi Cohen", photo: avi, lastMessage: "hey you", lastMessageTime: "1", messagesHistory: []},
    { nickname: "Tal Levi", photo: sunflower, lastMessage: "hey you", lastMessageTime: "1", messagesHistory: []}
];

export default chatsListDefault;