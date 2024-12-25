export interface EventProps {
  id: string;
  name: string;
  description: string;
  location: string;
  emoji: string;
  date: string;
  time: string;
}
export interface Badge {
  id: number;
  title: string;
  icon: string;
}
export interface UserProf { 
    name : string;
    email : string;
    gems : number;
    hearts : number;
    streak : number; // Date.now
    avatar : string;
    progress : string[];
    xp : number;
    badges : Badge[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  name?: string;
  icon: string;
  color: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'text-to-text' | 'text-to-image' | 'image-to-text' | 'image-to-image';
  answers: string[];
  correct: number;
  question: string; //| Image;
  subQuestion?: string;
}
