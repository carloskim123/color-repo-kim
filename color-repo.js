import { convertModule } from "../modules/convert";
import { infoModule } from "../modules/info";
import { manipulateModule } from "../modules/manipulate";
import { parseModule } from "../modules/parse";
import { validateModule } from "../modules/validate";

export const ColorRepo = {
    convert: convertModule,
    info: infoModule,
    parse: parseModule,
    validate: validateModule,
    manipulate: manipulateModule
}



module.exports = ColorRepo