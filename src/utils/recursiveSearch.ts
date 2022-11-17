import { StructureType } from "../types/structure";

export const recursiveSearch = (tree: StructureType, query: string): StructureType => {
  return tree.filter(node => {
     if('children' in node) {
         const result = recursiveSearch(node.children, query);
         if(result.length) {
             node.children = result;
             return true;
         }
         return false;
     } else {
      return node.name.includes(query);
     }
  });
 };
