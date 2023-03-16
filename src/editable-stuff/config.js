// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Upadhya",
  middleName: "Silumini",
  lastName: "Aththanayaka",
  message: " The world continues to evolve with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/UpadhyaSilumini99",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/upadhya.silumini",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/upadhya-silumini-b04697231/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/upadhya.png"),
  imageSize: 375,
  message:
    "I am Upadhya Silumini Aththanayaka.  Undergraduate of BSc (honors) Information Communication Technology degree at the University of Sri Jayawardenepura. I am a responsible, self-motivated, skillful, and dedicated undergraduate with team spirit and leadership qualities who is willing to accept challenges, seeking an opportunity as a software engineer to apply and explore the existing and forthcoming technologies in the field of Information Technology.",
  resume: "https://mega.nz/file/EEtgXRJR#-qUEjQl-SyCgrmyeDQPYWpjZIkyVzi0BP7UMpw4uWpk",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "UpadhyaSilumini99",
  reposLength: 4,
  specificRepos: [],
};


// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",

};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a software engineer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "upadhyasilumini99@gmail.com",
};


export { navBar, mainBody, about, repos, contact, getInTouch };
