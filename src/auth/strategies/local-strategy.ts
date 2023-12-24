import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { UnauthorizedException } from "@nestjs/common";

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super()
       
    }
       
       

    async validate(username:string, password:string){
      console.log({auth : this.authService})
        const user = await this.authService.test()
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}