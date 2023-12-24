import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    findUserComments(userId :  number){
        return "this is the comments of the user";
    }
}
