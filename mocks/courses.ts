import { Course } from "@/types/data";

export const mockCourses: Course[] = [
  {
    id: "course1",
    title: "Basic Anatomy",
    description: "Learn the basics of human anatomy for paramedics.",
    image: "https://example.com/images/anatomy-course.png",
    lessons: [
      {
        id: "lesson0",
        title: "Introduction to Anatomy",
        description: "An overview of human anatomy and its importance.",
        icon: "📘",
        color: "#8A2BE2",
        exercises: [
          {
            id: "exercise0",
            title: "Anatomy Basics",
            type: "choice",
            answers: ["Cells", "Tissues", "Organs", "All of the above"],
            correct: 3,
            question: "What are the building blocks of the human body?",
          },
        ],
      },
      {
        id: "lesson1",
        title: "Skeletal System",
        description: "Understand the structure and function of the human skeleton.",
        icon: "🦴",
        color: "#FFD700",
        exercises: [
          {
            id: "exercise1",
            title: "Bone Identification",
            type: "choice",
            answers: ["Femur", "Tibia", "Skull", "Radius"],
            correct: 0,
            question: "Which is the longest bone in the human body?",
          },
          {
            id: "exercise2",
            title: "Bone Matching",
            type: "match",
            answers: ["Skull", "Protects the brain", "Ribs", "Protects lungs"],
            correct: 1,
            question: "Match the bones with their primary functions.",
          },
        ],
      },
      {
        id: "lesson2",
        title: "Muscular System",
        description: "Learn the major muscles in the human body.",
        icon: "💪",
        color: "#FF5733",
        exercises: [
          {
            id: "exercise3",
            title: "Muscle Functions",
            type: "fill",
            answers: ["Biceps", "Quadriceps"],
            correct: 0,
            question: "What muscle is primarily responsible for flexing the arm?",
          },
        ],
      },
      {
        id: "lesson3",
        title: "Circulatory System",
        description: "Explore the heart, blood vessels, and circulation.",
        icon: "❤️",
        color: "#DC143C",
        exercises: [
          {
            id: "exercise4",
            title: "Heart Anatomy",
            type: "choice",
            answers: ["Atrium", "Ventricle", "Valve", "All of the above"],
            correct: 3,
            question: "What are the main parts of the human heart?",
          },
        ],
      },
      {
        id: "lesson4",
        title: "Nervous System",
        description: "Learn about the brain, spinal cord, and nerves.",
        icon: "🧠",
        color: "#6A5ACD",
        exercises: [
          {
            id: "exercise5",
            title: "Neuron Basics",
            type: "choice",
            answers: ["Axon", "Dendrite", "Cell Body", "All of the above"],
            correct: 3,
            question: "What are the parts of a neuron?",
          },
        ],
      },
      {
        id: "lesson5",
        title: "Respiratory System",
        description: "Understand how humans breathe and oxygenate blood.",
        icon: "🌬️",
        color: "#00CED1",
        exercises: [
          {
            id: "exercise6",
            title: "Breathing Process",
            type: "fill",
            answers: ["Inhalation", "Exhalation"],
            correct: 0,
            question: "What is the term for the process of taking in air?",
          },
        ],
      },
      {
        id: "lesson6",
        title: "Digestive System",
        description: "Learn how food is broken down and absorbed by the body.",
        icon: "🍽️",
        color: "#FF6347",
        exercises: [
          {
            id: "exercise7",
            title: "Digestion Stages",
            type: "drag",
            answers: ["Chewing", "Swallowing", "Stomach digestion"],
            correct: 2,
            question: "Arrange the stages of digestion in the correct order.",
          },
        ],
      },
      {
        id: "lesson7",
        title: "Endocrine System",
        description: "Understand the hormonal system and its role in the body.",
        icon: "🩸",
        color: "#FF4500",
        exercises: [
          {
            id: "exercise8",
            title: "Hormone Functions",
            type: "choice",
            answers: ["Insulin", "Adrenaline", "Cortisol", "All of the above"],
            correct: 3,
            question: "Which hormones help regulate body processes?",
          },
        ],
      },
    ],
  },
  {
    id: "course2",
    title: "First Aid Basics",
    description: "Master the essential techniques of first aid.",
    image: "https://example.com/images/first-aid-course.png",
    lessons: [
      {
        id: "lesson3",
        title: "CPR",
        description: "Learn how to perform CPR effectively.",
        icon: "❤️",
        color: "#DC143C",
        exercises: [
          {
            id: "exercise4",
            title: "CPR Steps",
            type: "choice",
            answers: [
              "30 compressions, 2 breaths",
              "20 compressions, 3 breaths",
              "15 compressions, 2 breaths",
              "40 compressions, 1 breath",
            ],
            correct: 0,
            question: "What is the correct ratio of chest compressions to breaths in CPR?",
          },
        ],
      },
      {
        id: "lesson4",
        title: "Bandaging",
        description: "Understand how to properly bandage wounds.",
        icon: "🩹",
        color: "#00BFFF",
        exercises: [
          {
            id: "exercise5",
            title: "Wound Dressing",
            type: "drag",
            answers: ["Clean wound", "Apply pressure", "Wrap bandage"],
            correct: 2,
            question: "Arrange the steps of wound dressing in the correct order.",
          },
        ],
      },
    ],
  },
];
