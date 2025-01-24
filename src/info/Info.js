import self from "../img/self.png"
import mock1 from "../img/load2.gif"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Romain",
    lastName: "Pereira",
    initials: "RP", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Student Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🇫🇷',
            text: 'Based in Paris, France'
        },
        {
            emoji: "👨‍💻", // 👨‍💻
            text: "Student at Lycée Parc de Vilgénis"
        },
        {
            emoji: "📧",
            text: "rpereira.pro@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://linkedin.com/in/romain-pereira-233418206/",
            icon: 'fa fa-linkedin',
            label: 'linkedin'
        },
        {
            link: "https://github.com/romainp12",
            icon: 'fa fa-github',
            label: 'github'
        },
        {
            link: "https://twitter.com/footpatrolfr",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Romain Pereira. I'm a Full Stack Student Developer. I enjoy building web applications and learning new technologies. I'm currently studying at Lycée Parc de Vilgénis. I love to travel and explore new places. I'm currently based in Paris, France.",
    skills:
        {
            languages: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'HTML/CSS', 'Go'],
            frameworks: ['React', 'Express', 'Flask', 'Django', 'Gin', 'Bootstrap', 'Tailwind'],
            databases: ['MySQL', 'SQLite', 'MongoDB', 'MSSQL', 'Firebase'],
            cloudServices: ['AWS EC2', 'GCP', 'Heroku'],
            tools: ['Git', 'Postman', 'Insomnia', 'npm', 'pip', 'Swagger']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Coming soon 🔜",
            live: "#", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "#", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        }
    ]
}
