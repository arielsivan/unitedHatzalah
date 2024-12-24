
export interface EventProps {
  id: string;
  name: string;
  description: string;
  location: string;
  emoji: string;
  date: string;
  time : string;
}
export interface Badge{
    id : number;
    title : string;
    icon : string;
}
export interface UserProf { 
    name : string;
    email : string;
    gems : number;
    hearts : number;
    streak : number;
    badges : Badge[];
}

export interface Course {
    id : string;
    title : string;
    description : string;
    image : string;
    lessons : Lesson[];
}

export interface Lesson {
    id : string;
    title : string;
    description : string;
    icon : string;
    color : string;
    exercises : Exercise[];
}

export interface Exercise {
    id : string;
    title : string;
    type : 'choice' | 'fill'  | 'match';
    answers : string[];
    correct : number;
    question : string; //| Image;
}