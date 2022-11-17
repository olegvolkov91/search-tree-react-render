import { StructureType } from "../types/structure";

export const deepClone = (tree: StructureType): StructureType => JSON.parse(JSON.stringify(tree));