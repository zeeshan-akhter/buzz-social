import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Nature's sweet delight, juicy and vibrant.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: uuid(),
        createdAt: "2023-06-01",
        username: "zaidk",
        comment: "Nice Fruit",
      },
      {
        id: uuid(),
        createdAt: "2023-06-03",
        username: "faisal_akhter",
        comment: "Wow",
      },
    ],
    fullname: "Zeeshan Akhter",
    username: "zee",
    postImage: [
      "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZydWl0fGVufDB8fDB8fHww",
    ],
    createdAt: "2023-08-10",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Turtles are reptiles of the order Testudines, characterized by a special shell developed mainly from their ribs. Modern turtles are divided into two major groups, the Pleurodira and Cryptodira, which differ in the way the head retracts.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "Zeeshan Akhter",
    username: "zee",
    postImage: [
      "https://res.cloudinary.com/dkfqnzabv/video/upload/v1683230916/samples/sea-turtle.mp4",
    ],
    createdAt: "2024-01-01",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "With gentle eyes and a trunk so long.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: uuid(),
        createdAt: "2024-02-13",
        username: "zaidk",
        comment: "Amazing 😍",
      },
      {
        id: uuid(),
        createdAt: "2024-02-13",
        username: "faisal_akhter",
        comment: "Lovely",
      },
    ],
    fullname: "Zaik Khan",
    username: "zaidk",
    postImage: [
      "https://res.cloudinary.com/dkfqnzabv/video/upload/v1683230917/samples/elephants.mp4",
    ],
    createdAt: "2023-12-12",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Exploring new horizons. 🌍 #AdventureTime #Travel",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: uuid(),
        createdAt: "2024-02-13",
        username: "zaidk",
        comment: "Amazing view! 😍",
      },
      {
        id: uuid(),
        createdAt: "2024-02-13",
        username: "faisal_akhter",
        comment: "Where is this?",
      },
    ],
    fullname: "Zeeshan Akhter",
    username: "zee",
    postImage: [
      "https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5lZXJ8ZW58MHx8MHx8fDA%3D",
    ],
    createdAt: "2024-02-13",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Feeling cozy with a good book and hot cocoa. ☕📚 #Bookworm",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: uuid(),
        createdAt: "2024-02-14",
        username: "adarashbalika",
        comment: "Love the ambiance! 😊",
      },
      {
        id: uuid(),
        createdAt: "2024-02-14",
        username: "zee",
        comment: "What book are you reading?",
      },
    ],
    fullname: "Faisal Akhter",
    username: "faisal_akhter",
    postImage: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    createdAt: "2024-02-14",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Friday night vibes. 🎉🎶 #PartyTime",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        id: uuid(),
        createdAt: "2024-02-15",
        username: "zee",
        comment: "Wish I could join! Looks fun!",
      },
      {
        id: uuid(),
        createdAt: "2024-02-15",
        username: "faisal_akhter",
        comment: "Who's the DJ?",
      },
    ],
    fullname: "Adarsh Balika",
    username: "adarshbalika",
    postImage: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnR5JTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    createdAt: "2024-02-15",
    updatedAt: formatDate(),
  },
];
