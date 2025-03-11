import self from "../img/self.png"
import mock1 from "../img/mocknew.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Romain",
    lastName: "Pereira",
    initials: "RP",
    position: "Full Stack Student Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
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
        },
        {
            link: "https://drive.google.com/file/d/1uKneUis2ByMwSZGsBra_zKKTbR1JeeQP/view",
            icon: "fa fa-clipboard",
            label: 'clipboard'
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
            label: 'Traveling',
            emoji: '✈️'
        },
        {
            label: 'Video Games',
            emoji: '🎮'
        },
        {
            label: 'Soccer',
            emoji: '⚽️'
        },
        {
            label: 'Padel',
            emoji: '🎾'
        }
        
    ],
    portfolio: [
        {
            title: "Projet Zoo",
            live: "http://romainp12-zoo.fwh.is/login.php",
            source: "#",
            image: mock1
        }
    ]
}
