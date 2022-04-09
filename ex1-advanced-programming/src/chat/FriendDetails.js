
let updated = false;
let lastFriend =  { nickname: '', photo: '', messagesHistory: []};
let thisFriend = '';

const HandleLogout = ()=>{
    lastFriend = thisFriend;
}

export default {lastFriend, thisFriend, HandleLogout, updated};