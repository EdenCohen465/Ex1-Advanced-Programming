import avi from './userPhotos/avi.webp';
import eiffelTower from './userPhotos/eiffelTower.webp';
import israel from './userPhotos/israel.webp';
import sunset from './userPhotos/sunset.jpg';
import sunflower from './userPhotos/sunflower.jpg';
import a from './messages_objects/a.jpg';
import b from './messages_objects/b.jpg';
import c from './messages_objects/c.jpg';
import d from './messages_objects/d.jpg';
import e from './messages_objects/e.jpg';
import f from './messages_objects/f.jpg';
import video1 from './messages_objects/video1.mp4';
import song from './messages_objects/song.mp3';

// hard codded users!

const usersList = new Map();
const admin_messages = new Map();

// the key is the friend name, value is the history messages.
admin_messages.set('ronioded', [{ date: '10.4.2022', sec: 0, time: "10:00", message: "heyyyyy", displayMessage: "heyyyyy", type: "text", iSent: true }, { date: '10.4.2022', sec: 0, time: "10:30", message: "HELLO", displayMessage: "HELLO", type: "text", iSent: false }, { date: '10.4.2022', sec: 0, time: "12:00", message: song, displayMessage: "audio", type: "audio", iSent: true }]);
admin_messages.set('edencohen', [{ date: '10.4.2022', sec: 0, time: "13:43", message: a, displayMessage: "photo", type: "photo", iSent: true }, { date: '10.4.2022', sec: 0, time: "13:50", message: video1, displayMessage: "video", type: "video", iSent: false }]);
admin_messages.set('israelisraeli', [{ date: '10.4.2022', sec: 0, time: "16:23", message: b, displayMessage: "photo", type: "photo", iSent: false }]);
admin_messages.set('avicohen', [{ date: '10.4.2022', sec: 0, time: "12:00", message: "How Are You?", displayMessage: "How Are You?", type: "text", iSent: true }, { date: '10.4.2022', sec: 0, time: "12:05", message: "Good, thanks!:)", displayMessage: "Good, thanks!:)", type: "text", iSent: false }, { date: '10.4.2022', sec: 0, time: "12:00", message: song, displayMessage: "audio", type: "audio", iSent: false }]);
admin_messages.set('tallevi', [{ date: '11.4.2022', sec: 0, time: "14:45", message: f, displayMessage: "photo", type: "photo", iSent: true }, { date: '11.4.2022', time: "14:57", message: "Thanks!!", displayMessage: "Thanks!!", type: "text", iSent: false }]);
usersList.set('admin', { nickname: "admin", photo: sunflower, password: "admin1", friendsMessagesHistory: admin_messages });

const ronioded_messages = new Map();
ronioded_messages.set('admin', [{ date: '10.4.2022', sec: 0, time: "10:00", message: "heyyyyy", displayMessage: "heyyyyy", type: "text", iSent: false }, { date: '10.4.2022', sec: 0, time: "10:30", message: "HELLO", displayMessage: "HELLO", type: "text", iSent: true }, { date: '10.4.2022', sec: 0, time: "12:00", message: song, displayMessage: "audio", type: "audio", iSent: false }]);
ronioded_messages.set('edencohen', [{ date: '10.4.2022', sec: 0, time: "16:54", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: true }, { date: '10.4.2022', sec: 0, time: "16:58", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: false }]);
ronioded_messages.set('israelisraeli', [{ date: '10.4.2022', sec: 0, time: "19:00", message: c, displayMessage: "photo", type: "photo", iSent: true }]);
ronioded_messages.set('avicohen', [{ date: '10.4.2022', sec: 0, time: "02:59", message: d, displayMessage: "photo", type: "photo", iSent: false }]);
ronioded_messages.set('tallevi', [{ date: '10.4.2022', sec: 0, time: "06:00", message: video1, displayMessage: "video", type: "video", iSent: true }]);
usersList.set("ronioded", { nickname: "roniz", photo: sunset, password: "roniz1", friendsMessagesHistory: ronioded_messages });

const edencohen_messages = new Map();
edencohen_messages.set('admin', [{ date: '10.4.2022', sec: 0, time: "13:43", message: a, displayMessage: "photo", type: "photo", iSent: false }, { date: '10.4.2022', sec: 0, time: "13:50", message: video1, displayMessage: "video", type: "video", iSent: true }]);
edencohen_messages.set("ronioded", [{ date: '10.4.2022', sec: 0, time: "16:54", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: false }, { date: '10.4.2022', sec: 0, time: "16:58", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: true }]);
edencohen_messages.set("israelisraeli", [{ date: '10.4.2022', sec: 0, time: "03:00", message: "Good night", displayMessage: "Good night", type: "text", iSent: true }, { date: '10.4.2022', sec: 0, time: "03:10", message: "Happy Dreams!!", displayMessage: "Happy Dreams!!", type: "text", iSent: false }]);
edencohen_messages.set("avicohen", [{ date: '10.4.2022', sec: 0, time: "16:18", message: "Meet me at 10:00am", displayMessage: "Meet me at 10:00am", type: "text", iSent: true }]);
edencohen_messages.set("tallevi", [{ date: '10.4.2022', sec: 0, time: "19:18", message: song, displayMessage: "audio", type: "audio", iSent: true }]);
usersList.set('edencohen', { username: "edencohen", nickname: "eden gaoniz", photo: eiffelTower, password: "edenz1", friendsMessagesHistory: edencohen_messages });

const israelisraeli_messages = new Map();
israelisraeli_messages.set('admin', [{ date: '10.4.2022', sec: 0, time: "16:23", message: b, displayMessage: "photo", type: "photo", iSent: true }]);
israelisraeli_messages.set("ronioded", [{ date: '10.4.2022', sec: 0, time: "19:00", message: c, displayMessage: "photo", type: "photo", iSent: false }]);
israelisraeli_messages.set("edencohen", [{ date: '10.4.2022', sec: 0, time: "03:00", message: "Good night", displayMessage: "Good night", type: "text", iSent: false }, { date: '10.4.2022', sec: 0, time: "03:10", message: "Happy Dreams!!", displayMessage: "Happy Dreams!!", type: "text", iSent: true }]);
israelisraeli_messages.set("avicohen", [{ date: '10.4.2022', sec: 0, time: "16:30", message: video1, displayMessage: "video", type: "video", iSent: true }]);
israelisraeli_messages.set("tallevi", [{ date: '10.4.2022', sec: 0, time: "3:59", message: song, displayMessage: "audio", type: "audio", iSent: false }]);
usersList.set('israelisraeli', { nickname: "Israel", photo: israel, password: "israel1", friendsMessagesHistory: israelisraeli_messages });

const avicohen_messages = new Map();
avicohen_messages.set('admin', [{ date: '10.4.2022', sec: 0, time: "12:00", message: "How Are You?", displayMessage: "How Are You?", type: "text", iSent: false }, { date: '10.4.2022', sec: 0, time: "12:05", message: "Good, thanks!:)", displayMessage: "Good, thanks!:)", type: "text", iSent: true }, { date: '10.4.2022', sec: 0, time: "12:00", message: song, displayMessage: "audio", type: "audio", iSent: true }]);
avicohen_messages.set("ronioded", [{ date: '10.4.2022', sec: 0, time: "02:59", message: d, displayMessage: "photo", type: "photo", iSent: true }]);
avicohen_messages.set("edencohen", [{ date: '10.4.2022', sec: 0, time: "16:18", message: "Meet me at 10:00am", displayMessage: "Meet me at 10:00am", type: "text", iSent: false }]);
avicohen_messages.set("israelisraeli", [{ date: '10.4.2022', sec: 0, time: "16:30", message: video1, displayMessage: "video", type: "video", iSent: false }]);
avicohen_messages.set("tallevi", [{ date: '10.4.2022', sec: 0, time: "18:16", message: e, displayMessage: "photo", type: "photo", iSent: true }]);
usersList.set('avicohen', { nickname: "avi", photo: avi, password: "avi1", friendsMessagesHistory: avicohen_messages });

const tallevi_messages = new Map();
tallevi_messages.set('admin', [{ date: '10.4.2022', sec: 0, time: "14:45", message: f, displayMessage: "photo", type: "photo", iSent: false }, { date: '11.4.2022', sec: 0, time: "14:57", message: "Thanks!!", displayMessage: "Thanks!!", type: "text", iSent: true }]);
tallevi_messages.set("edencohen", [{ date: '10.4.2022', sec: 0, time: "19:18", message: song, displayMessage: "audio", type: "audio", iSent: false }]);
tallevi_messages.set("ronioded", [{ date: '10.4.2022', sec: 0, time: "06:00", message: video1, displayMessage: "video", type: "video", iSent: false }]);
tallevi_messages.set("israelisraeli", [{ date: '10.4.2022', sec: 0, time: "3:59", message: song, displayMessage: "audio", type: "audio", iSent: true }]);
tallevi_messages.set("avicohen", [{ date: '10.4.2022', sec: 0, time: "18:16", message: e, displayMessage: "photo", type: "photo", iSent: true }]);
usersList.set("tallevi", { nickname: "talevi", photo: sunflower, password: "tal1", friendsMessagesHistory: tallevi_messages });


usersList.set('guy', { nickname: "guy", photo: sunflower, password: "tal1", friendsMessagesHistory: new Map() });


export default usersList;