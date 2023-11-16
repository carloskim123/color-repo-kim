import { convertModule } from "../modules/convert";
import { infoModule } from "../modules/info";
import { manipulateModule } from "../modules/manipulate";
import { palleteModule } from "../modules/pallete/generate";
import { parseModule } from "../modules/parse";
import { validateModule } from "../modules/validate";

export const ColorRepoKim = {
    convert: convertModule,
    info: infoModule,
    parse: parseModule,
    validate: validateModule,
    manipulate: manipulateModule,
    pallete: palleteModule
}

