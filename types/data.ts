export interface EventProps {
  id: string;
  name: string;
  description: string;
  location: string;
  emoji: string;
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