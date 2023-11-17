import { convertModule, convertModule } from "../modules/convert";
import { infoModule } from "../modules/info";
import { manipulateModule } from "../modules/manipulate";
import { parseModule } from "../modules/parse";
import { validateModule } from "../modules/validate";

// All module imports
export const ColorRepoKim = {
    convert: convertModule,
    info: infoModule,
    parse: parseModule,
    validate: validateModule,
    manipulate: manipulateModule,
}

// Single module exports
const convertModule = convertModule;
const infoModule = infoModule;
const manipulateModule = manipulateModule;
const parseModule = parseModule;
const validateModule = validateModule;

