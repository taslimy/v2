const projects = {
  projects: {
    id: 1,
    title: "projects",
    items: [
      {
        id: 1,
        name: "your spotify",
        img:
          "https://images.unsplash.com/photo-1542837201-998d8469d90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850",
        kitBackgroundImage:
          "-webkit-gradient(linear, left top, left bottom, from(#f4b93d), to(#f4b93d))",
        backgroundImage: "linear-gradient(180deg, #f4b93d, #f4b93d)",
        description:
          "Your Spotify is a Full-Stack React application that leverages Spotify's API to display information about the user's listening habits.",
        bulletpoints: [
          "Detailed visual of top artists & top tracks displayed on cards",
          "List view of recently played tracks with live updates",
          " Displays users following, follower count, & subscription status",
          "The backend is using NodeJS and the front-end is using OAuth for authentication"
        ]
      },
      {
        id: 2,
        name: "key conservation",
        img:
          "https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850",
        kitBackgroundImage:
          "-webkit-gradient(linear, left top, left bottom, from(#005ba9), to(#005ba9))",
        backgroundImage: "linear-gradient(180deg, #005ba9, #005ba9)",
        description:
          "Key Conservation is a mobile application helping conservationists gain funding and global support by posting campaigns.",
        bulletpoints: [
          "Pair programmed the front-end layout, navigation, screens & buttons",
          "Pair programmed the backend using NodeJS & Express",
          "Assisted in deployment of the front-end & back-end",
          "Developed the app to be pixel perfect to match the desired look of our UX/UI designers & stakeholder"
        ]
      }
    ]
  }
};

export default projects;
