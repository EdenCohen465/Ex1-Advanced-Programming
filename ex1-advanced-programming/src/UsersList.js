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

const usersList = new Map();
const admin_messages = new Map();

// the key is the friend name, value is the history messages.
admin_messages.set('ronioded', [{ time: "10:00", message: "heyyyyy", displayMessage: "heyyyyy", type: "text", iSent: true }, { time: "10:30", message: "HELLO", displayMessage: "HELLO", type: "text", iSent: false }, { time: "12:00", message: "Nice to see you (:", displayMessage: "Nice to see you (:", type: "text", iSent: true }]);
admin_messages.set('edencohen', [{ time: "13:43", message: a, displayMessage: "photo", type: "photo", iSent: true }, { time: "13:50", message: video1, displayMessage: "video", type: "video", iSent: false }]);
admin_messages.set('israelisraeli', [{ time: "16:23", message: b, displayMessage: "photo", type: "photo", iSent: false }]);
admin_messages.set('avicohen', [{ time: "12:00", message: "How Are You?", displayMessage: "How Are You?", type: "text", iSent: true }, { time: "12:05", message: "Good, thanks!:)", displayMessage: "Good, thanks!:)", type: "text", iSent: false }]);
admin_messages.set('tallevi', [{ time: "14:45", message: f, displayMessage: "photo", type: "photo", iSent: true }, { time: "14:57", message: "Thanks!!", displayMessage: "Thanks!!", type: "text", iSent: false }]);

usersList.set('admin', { nickname: "admin", public_photo: sunflower, password: "admin1", friendsMessagesHistory: admin_messages });


const ronioded_messages = new Map();
ronioded_messages.set('admin', [{ time: "10:00", message: "heyyyyy", displayMessage: "heyyyyy", type: "text", iSent: false }, { time: "10:30", message: "HELLO", displayMessage: "HELLO", type: "text", iSent: true }, { time: "12:00", message: "Nice to see you (:", displayMessage: "Nice to see you (:", type: "text", iSent: false }]);
ronioded_messages.set('edencohen', [{ time: "16:54", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: true }, { time: "16:58", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: false }]);
ronioded_messages.set('israelisraeli', [{ time: "19:00", message: c, displayMessage: "photo", type: "photo", iSent: true }]);
ronioded_messages.set('avicohen', [{ time: "02:59", message: d, displayMessage: "photo", type: "photo", iSent: false }]);
ronioded_messages.set('tallevi', [{ time: "06:00", message: video1, displayMessage: "video", type: "video", iSent: true }]);

usersList.set("ronioded", { nickname: "roniz", public_photo: sunset, password: "roniz1", friendsMessagesHistory: ronioded_messages });


const edencohen_messages = new Map();
edencohen_messages.set('admin', [{ time: "13:43", message: a, displayMessage: "photo", type: "photo", iSent: false }, { time: "13:50", message: video1, displayMessage: "video", type: "video", iSent: true }]);
edencohen_messages.set("ronioded", [{ time: "16:54", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: false }, { time: "16:58", message: "Hey!!!", displayMessage: "Hey!!!", type: "text", iSent: true }]);
edencohen_messages.set("israelisraeli", [{ time: "03:00", message: "Good night", displayMessage: "Good night", type: "text", iSent: true }, { time: "03:10", message: "Happy Dreams!!", displayMessage: "Happy Dreams!!", type: "text", iSent: false }]);
edencohen_messages.set("avicohen", [{ time: "16:18", message: "Meet me at 10:00am", displayMessage: "Meet me at 10:00am", type: "text", iSent: true }]);
edencohen_messages.set("tallevi", [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }]);
usersList.set('edencohen', { username: "edencohen", nickname: "eden gaoniz", public_photo: eiffelTower, password: "edenz1", friendsMessagesHistory: edencohen_messages });

const israelisraeli_messages = new Map();
israelisraeli_messages.set('admin', [{ time: "16:23", message: b, displayMessage: "photo", type: "photo", iSent: true }]);
israelisraeli_messages.set("ronioded", [{ time: "19:00", message: c, displayMessage: "photo", type: "photo", iSent: false }]);
israelisraeli_messages.set("edencohen", [{ time: "03:00", message: "Good night", displayMessage: "Good night", type: "text", iSent: false }, { time: "03:10", message: "Happy Dreams!!", displayMessage: "Happy Dreams!!", type: "text", iSent: true }]);
israelisraeli_messages.set("avicohen", [{ time: "16:30", message: video1, displayMessage: "video", type: "video", iSent: true }]);
israelisraeli_messages.set("tallevi", [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }]);
usersList.set('israelisraeli', { nickname: "Israel", public_photo: israel, password: "israel1", friendsMessagesHistory: israelisraeli_messages });

const avicohen_messages = new Map();
avicohen_messages.set('admin', [{ time: "12:00", message: "How Are You?", displayMessage: "How Are You?", type: "text", iSent: false }, { time: "12:05", message: "Good, thanks!:)", displayMessage: "Good, thanks!:)", type: "text", iSent: true }]);
avicohen_messages.set("ronioded", [{ time: "02:59", message: d, displayMessage: "photo", type: "photo", iSent: true }]);
avicohen_messages.set("edencohen", [{ time: "16:18", message: "Meet me at 10:00am", displayMessage: "Meet me at 10:00am", type: "text", iSent: false }]);
avicohen_messages.set("israelisraeli", [{ time: "16:30", message: video1, displayMessage: "video", type: "video", iSent: false }]);
avicohen_messages.set("tallevi", [{ time: "18:16", message: e, displayMessage: "photo", type: "photo", iSent: true }]);
usersList.set('avicohen', { nickname: "avi", public_photo: avi, password: "avi1", friendsMessagesHistory: avicohen_messages });

const tallevi_messages = new Map();
tallevi_messages.set('admin', [{ time: "14:45", message: f, displayMessage: "photo", type: "photo", iSent: false }, { time: "14:57", message: "Thanks!!", displayMessage: "Thanks!!", type: "text", iSent: true }]);
tallevi_messages.set("edencohen", [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }]);
tallevi_messages.set("ronioded", [{ time: "06:00", message: video1, displayMessage: "video", type: "video", iSent: false }]);
tallevi_messages.set("israelisraeli", [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }]);
tallevi_messages.set("avicohen", [{ time: "18:16", message: e, displayMessage: "photo", type: "photo", iSent: true }]);
usersList.set("tallevi", { nickname: "talevi", public_photo: sunflower, password: "tal1", friendsMessagesHistory: tallevi_messages });


usersList.set('guy', { nickname: "guy", public_photo: sunflower, password: "tal1", friendsMessagesHistory: new Map() });


export default usersList;