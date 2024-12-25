import { UserProf } from "./data";

export interface Thread{
    id : number;
    title : string;
    date : Date;
    enters : number;
    replies : Reply[];
}

export interface Reply{
    title: string;
    id : number;
    content : string;
    date : Date;
    likes? : number;
    user : UserProf;
}