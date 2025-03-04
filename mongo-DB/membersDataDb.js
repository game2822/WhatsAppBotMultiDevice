const mdClient = require("../mongodb");
mdClient.connect();

const member = mdClient.db("MyBotDataDB").collection("members");

const createMembersData = (jid, name) => {
    member.findOne({ _id: jid }).then(res => {
        if (res == null) {
            // console.log("Creating Member Data : ", jid);
            member.insertOne({
                _id: jid,
                username: name,
                isBlock: false,
                totalmsg: 0,
                dmLimit: 100,
                warning: {}
            })
        }
        // else console.log("ALready Created Member Data : ", jid);
    })
}

const getMemberData = (jid) => {
    return member.findOne({ _id: jid });
}
module.exports = { createMembersData, getMemberData, member };