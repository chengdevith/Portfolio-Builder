// Import images (ensure paths are correct)
import Portfolio1 from '../assets/Card_images/Portfolio/Portfolio-1.png';
import Portfolio2 from '../assets/Card_images/Portfolio/Portfolio-2.png';
import Portfolio3 from '../assets/Card_images/Portfolio/Portfolio-3.png';
import Portfolio4 from '../assets/Card_images/Portfolio/Portfolio-4.png';
import Portfolio5 from '../assets/Card_images/Portfolio/Portfolio-5.png';
import Portfolio6 from '../assets/Card_images/Portfolio/Portfolio-6.png';
import Resume1 from '../assets/Card_images/Resume/Resume-1.png';
import Resume2 from '../assets/Card_images/Resume/Resume-2.png';
import Resume3 from '../assets/Card_images/Resume/Resume-3.png';


const CardList = [
  {
    "id": 1,
    "image": Portfolio1,
    "title": 'Full-Stack Developer',
    "category": 'Student',
    "type": 'Portfolio',
  },
  {
    "id": 2,
    "image": Portfolio2,
    "title": 'Front-End Developer',
    "category": 'Student',
   " type": 'Portfolio',
  },
  {
    id: 3,
    image: Portfolio3,
    title: 'UI/UX Designer',
    category: 'Professional',
    type: 'Portfolio',
  },
  {
    id: 4,
    image: Portfolio4,
    title: 'Content Creator',
    category: 'Beginner',
    type: 'Portfolio',
  },
  {
    id: 5,
    image: Portfolio5,
    title: 'Front-End Developer',
    category: 'Professional',
    type: 'Portfolio',
  },
  {
    id: 6,
    image: Portfolio6,
    title: 'Designer',
    category: 'Beginner',
    type: 'Portfolio',
  },
  {
    id: 7,
    image: Resume1,
    title: 'Front-End Developer',
    category: 'Student',
    type: 'Resume',
  },
  {
    id: 8,
    image: Resume2,
    title: 'Engineer',
    category: 'Student',
    type: 'Resume',
  },
  {
    id: 9,
    image: Resume3,
    title: 'UI/UX Designer',
    category: 'Professional',
    type: 'Resume',
  },
];

// fetch("http://202.178.125.77:8012", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(CardList), 
// })
//   .then((res) => res.json())
//   .then((data) => console.log("Success:", data))
//   .catch((error) => console.error("Error:", error));


export default CardList;
