import { resolve } from 'path';

import { IBmw } from '@interfaces/Bmw';
import { BinaryTree } from '@modules/BinaryTree';
import { csvToArray } from '@modules/CsvToArray';
import { parseData } from '@utils/parseData';
import { BmwQueryRequest } from '@interfaces/DTO/BmwQuery';

export class TreeService {
  static init(fileName: string, mainKey: string) {
    const databasePath = resolve(__dirname, '..', '..', 'database', `${fileName}.csv`);
    const bmwsData = csvToArray<IBmw>(databasePath);
    const tree = BinaryTree.getBinaryTree<IBmw>(mainKey);

    return bmwsData.forEach((bmw) => tree.insertNode(bmw));
  }

  static filter(params: BmwQueryRequest) {
    const { key, operator, price } = params;
    const tree = BinaryTree.getBinaryTree<IBmw>();
    const filteredBmws = tree.find(price, operator);

    return parseData(filteredBmws, key);
  }
}
