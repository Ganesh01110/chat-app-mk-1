export const sampleChats = [
  {
    avatar: [
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "jhon doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "guiuigi doe",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "group1",
    _id: "3",
    groupChat: true,
    members: ["1", "2", "3"],
  },
];
//https://www.w3schools.com/howto/img_avatar.png

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "john doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "ukyfyuy",
    _id: "6",
  },
];
export const sampleNotification = [
  {
    sender: {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "john doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "ukyfyuy",
    },
    _id: "6",
  },
];

export const sampleMessage = [
  {
    attachment: [
      {
        public_id: "ahiuiu",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "banda magia ",
    _id: "oidhohdfoihfohof",
    sender: {
      _id: "user._id",
      name: "ganesh",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachment: [
      {
        public_id: "ahiuiu0000",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "banda magia0000 ",
    _id: "oidhohdfoihfohof000",
    sender: {
      _id: "uigigig",
      name: "ganesh000",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const sampleChatGroups = [];

export const dashboardData = {
  users: [
    {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "john doe",
      _id: "1",
      username: "john doe",
      friends: "20",
      groups: "5",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "banda doe",
      _id: "6",
      username: "banda doe",
      friends: "27",
      groups: "25",
    },
  ],

  chats: [
    {
      name: "bhak bsdk",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalmembers: 2,
      totalmessages: 20,
      creator: {
        name: "john doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "laudas",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "12",
      groupChat: false,
       members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalmembers: 20,
      totalmessages: 200,
      creator: {
        name: "jane doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  meesagges:[
    {
      attachments:[  {
        public_id: "ahiuiu0000",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },],
      content: "banda ra bala",
      _id:"yfkufkffffffff",
      sender:{
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name:"bakwasss",
      },
      chat:"chatId",
      groupchat:false,
      createdat:"2024-02-12T10:41:30.630Z",
    }, {
      attachments:[],
      content: "pela ra bala",
      _id:"liioyoyoyoyo",
      sender:{
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name:"bauguiguig",
      },
      chat:"chatId",
      groupchat:true,
      createdat:"2024-02-12T10:41:30.630Z",
    },
  ]
};

export default sampleChats;
