export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: Question[];
  category: string;
}

export const exams: Exam[] = [
  {
    id: "javascript-basics",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics including variables, functions, and DOM manipulation.",
    duration: "15 minutes",
    category: "Programming",
    questions: [
      {
        id: 1,
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var myVar = 5;", "variable myVar = 5;", "v myVar = 5;", "declare myVar = 5;"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which method is used to add an element to the end of an array?",
        options: ["append()", "push()", "add()", "insert()"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Management", "Dynamic Object Method", "Document Oriented Markup"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "Which operator is used for strict equality comparison?",
        options: ["==", "===", "=", "!="],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is the result of '2' + 2 in JavaScript?",
        options: ["4", "'22'", "22", "Error"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which method is used to remove the last element from an array?",
        options: ["removeLast()", "pop()", "delete()", "splice()"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To refer to the current object", "To create a new variable", "To import modules", "To define functions"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "Which statement is used to exit a loop?",
        options: ["exit", "stop", "break", "end"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "What is the correct syntax for a JavaScript function?",
        options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which method converts a string to lowercase?",
        options: ["lower()", "toLowerCase()", "toLower()", "lowerCase()"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "react-fundamentals",
    title: "React Basics",
    description: "Explore the core concepts of React including components, props, and state management.",
    duration: "20 minutes",
    category: "Frontend",
    questions: [
      {
        id: 1,
        question: "What is JSX in React?",
        options: ["A database query language", "A JavaScript extension syntax", "A CSS framework", "A testing library"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which hook is used to manage component state?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a React component?",
        options: ["A CSS class", "A reusable piece of UI", "A database table", "A server endpoint"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "How do you pass data to a child component?",
        options: ["Using state", "Using props", "Using context", "Using refs"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is the virtual DOM?",
        options: ["A real DOM element", "A JavaScript representation of the DOM", "A CSS framework", "A testing utility"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which method is called after a component mounts?",
        options: ["componentDidMount", "useEffect", "Both A and B", "componentWillMount"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "What is the purpose of keys in React lists?",
        options: ["Styling", "Security", "Performance optimization", "Data validation"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "How do you handle events in React?",
        options: ["onclick", "addEventListener", "Event handlers as props", "jQuery"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "What is prop drilling?",
        options: ["Creating new components", "Passing props through multiple levels", "Optimizing performance", "Testing components"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which hook is used for side effects?",
        options: ["useState", "useContext", "useEffect", "useReducer"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "css-advanced",
    title: "Advanced CSS",
    description: "Master advanced CSS concepts including Flexbox, Grid, animations, and responsive design.",
    duration: "18 minutes",
    category: "Styling",
    questions: [
      {
        id: 1,
        question: "What does Flexbox help with?",
        options: ["Color management", "Layout and alignment", "Font loading", "Image optimization"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which property is used to create CSS Grid?",
        options: ["display: grid", "layout: grid", "grid: display", "create: grid"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is the difference between 'em' and 'rem' units?",
        options: ["No difference", "em is relative to parent, rem to root", "rem is relative to parent, em to root", "Both are absolute units"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which CSS property controls the stacking order?",
        options: ["z-index", "stack-order", "layer", "position"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What is a CSS pseudo-element?",
        options: ["A fake element", "A virtual element that can be styled", "An HTML element", "A JavaScript object"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which property is used for CSS animations?",
        options: ["transition", "animation", "Both A and B", "transform"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "What does 'mobile-first' design mean?",
        options: ["Only for mobile devices", "Designing for mobile first, then desktop", "Using mobile frameworks", "Testing on mobile only"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which selector has the highest specificity?",
        options: ["Class selector", "ID selector", "Element selector", "Universal selector"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "What is the purpose of CSS variables?",
        options: ["Store reusable values", "Create animations", "Define layouts", "Import fonts"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Which property controls how flex items grow?",
        options: ["flex-grow", "flex-expand", "grow", "flex-size"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "web-security",
    title: "Web Security Essentials",
    description: "Learn about common web vulnerabilities and security best practices for modern applications.",
    duration: "25 minutes",
    category: "Security",
    questions: [
      {
        id: 1,
        question: "What does XSS stand for?",
        options: ["Cross-Site Scripting", "eXternal Style Sheets", "eXtreme Security System", "Cross-Server Synchronization"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which header helps prevent clickjacking attacks?",
        options: ["X-Content-Type-Options", "X-Frame-Options", "X-XSS-Protection", "Content-Security-Policy"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is CSRF?",
        options: ["Cross-Site Request Forgery", "Client-Side Resource Filtering", "Cascading Style Request Framework", "Cross-Server Response Format"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "Which is the most secure way to store passwords?",
        options: ["Plain text", "Base64 encoding", "MD5 hash", "Bcrypt with salt"],
        correctAnswer: 3
      },
      {
        id: 5,
        question: "What does HTTPS provide?",
        options: ["Faster loading", "Better SEO only", "Encryption and authentication", "Automatic backups"],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "What is SQL injection?",
        options: ["A database feature", "A malicious attack on databases", "A query optimization technique", "A backup method"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Which principle limits user permissions to minimum required?",
        options: ["Principle of least privilege", "Maximum security principle", "Open access principle", "Full permission principle"],
        correctAnswer: 0
      },
      {
        id: 8,
        question: "What is two-factor authentication?",
        options: ["Using two passwords", "Additional security layer beyond password", "Two different login forms", "Backup authentication method"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "Which HTTP status code indicates unauthorized access?",
        options: ["400", "401", "403", "404"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "What is the purpose of Content Security Policy (CSP)?",
        options: ["Speed optimization", "Prevent XSS attacks", "Database security", "Network encryption"],
        correctAnswer: 1
      }
    ]
  }
];