import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1708085384/buzz-social/avatar8_ihmftk.jpg",
    bio: "Passionate learner dedicated to exploring the intersections of art and technology for creative problem-solving. Embracing challenges with an open mind and a thirst for knowledge.",
    website: "https://zeeshanakhter.netlify.app/",
    background: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1683230925/cld-sample-4.jpg",
  },
  {
    _id: uuid(),
    firstName: "Zeeshan",
    lastName: "Akhter",
    username: "zee",
    password: "zee12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1708085375/buzz-social/avatar3_bswuoz.jpg",
    bio: "I'm a front-end engineer with great experience in building modern web applications. I'm passionate about HTML5, CSS3, and JavaScript as well as React JS and its ecosystem. I love delivering fast-loading, clean, and high-performance web experiences. I'm a strong believer in good UX and frontend performance optimization and ship reliable software which can be maintained easily and efficiently.",
    website: "https://zeeshanakhter.netlify.app/",
    background: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1683230912/samples/cloudinary-group.jpg",
  },
  {
    _id: uuid(),
    firstName: "Faisal",
    lastName: "Akhter",
    username: "faisal_akhter",
    password: "faisal12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1708085374/buzz-social/avatar5_wtdolx.jpg",
    bio: "#NEET ASPIRANT",
    website: "https://zeeshanakhter.netlify.app/",
    background: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1683230915/samples/landscapes/landscape-panorama.jpg",
  },
  {
    _id: uuid(),
    firstName: "Zaid",
    lastName: "Khan",
    username: "zaidk",
    password: "zaid12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileAvatar: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1708085374/buzz-social/avatar7_fvnii8.jpg",
    bio: "Artificial Intelligence Intern · Software Engineer · Machine Learning Engineer · Data Scientist",
    website: "https://www.linkedin.com/in/mohammad-zaid-khan/",
    background: "https://res.cloudinary.com/dkfqnzabv/image/upload/v1683230911/samples/ecommerce/accessories-bag.jpg",
  },
];
