
let updated = false;
let lastFriend = '';
let thisFriend = '';

const HandleLogout = ()=>{
    lastFriend = thisFriend;
}

export default {lastFriend, thisFriend, HandleLogout, updated};