
let updated = false;
let lastFriend = '';
let thisFriend = '';
let friend_messages_history=null;
const HandleLogout = ()=>{
    lastFriend = thisFriend;
}

export default {lastFriend, thisFriend, HandleLogout, updated, friend_messages_history};