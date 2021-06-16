import { getModelForClass,pre, modelOptions, prop} from "@typegoose/typegoose";
import { nolookalikesSafe } from "nanoid-dictionary";
import { customAlphabet } from "nanoid/async";

@pre<CtfTeam>('save', async function () {
    const nanoid = customAlphabet(nolookalikesSafe, 10)
    this.team_code = await nanoid()
})

@modelOptions({schemaOptions: {collection: "ctfteams", timestamps: true, toJSON:{virtuals:true}, toObject:{virtuals:true}}})
export class CtfTeam{
    /*@prop()
    public _id: Types.ObjectId*/

    @prop({ type: () => String, required:true, trim:true })
    public team_name: string;

    @prop({type: () => String})
    public team_code: string

    
}

const TeamModel = getModelForClass<typeof CtfTeam>(CtfTeam, {options: {customName: 'ctfteams'}})

export default TeamModel