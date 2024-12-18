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