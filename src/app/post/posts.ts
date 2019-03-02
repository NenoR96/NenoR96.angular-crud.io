import { User } from '../user/user';

export interface Post {
    id: number;
    title: string;
    descript: string;
    main: string;
    comments: number;
    user: number;
    createdAt: string;
}