import { get } from 'lodash';
import { TreeNode } from './TreeNode';

export class BinaryTree<T = never> {
  private root: TreeNode<T> | null = null;

  private static binaryTree: BinaryTree | null = null;

  private constructor(private mainKey = '') {}

  static getBinaryTree<T>(mainKey = ''): BinaryTree<T> {
    if (this.binaryTree) return this.binaryTree;
    this.binaryTree = new BinaryTree(mainKey);
    return this.binaryTree;
  }

  public insertNode(insertValue: T): void {
    const { root } = this;
    if (!root) {
      this.root = new TreeNode(insertValue);
      return;
    }
    this.insertNodeAux(insertValue, root);
  }

  private insertNodeAux(insertValue: T, root: TreeNode<T>) {
    const elementNode = root;
    const { leftNode, rightNode, value: nodeValue } = elementNode;

    const nodeMainKeyValue = get(nodeValue, this.mainKey || '', nodeValue) as number;
    const insertKeyValue = get(insertValue, this.mainKey || '', insertValue) as number;

    if (insertKeyValue <= nodeMainKeyValue) {
      if (leftNode) {
        this.insertNodeAux(insertValue, leftNode);
        return;
      }
      elementNode.leftNode = new TreeNode(insertValue);
      return;
    }

    if (insertKeyValue > nodeMainKeyValue) {
      if (rightNode) {
        this.insertNodeAux(insertValue, rightNode);
        return;
      }
      elementNode.rightNode = new TreeNode(insertValue);
    }
  }

  public find(value: number, operator: string): T[] {
    const foundValues: T[] = [];
    if (!this.root) throw new Error('No tree root found.');
    return this.findAux(value, this.root, foundValues, operator);
  }

  private findAux(
    searchValue: number,
    root: TreeNode<T>,
    foundValues: T[],
    operator: string,
  ): T[] {
    const foundValuesArray = foundValues;
    const { leftNode, rightNode, value: nodeValue } = root;

    const nodeMainKeyValue = get(nodeValue, this.mainKey || '', nodeValue) as number;

    const findComparison = eval(
      `${nodeMainKeyValue} ${operator} ${searchValue}`,
    ) as boolean;

    if (findComparison) foundValuesArray.push(nodeValue);

    if (searchValue <= nodeMainKeyValue && leftNode) {
      return this.findAux(searchValue, leftNode, foundValuesArray, operator);
    }

    if (searchValue > nodeMainKeyValue && rightNode) {
      this.findAux(searchValue, rightNode, foundValuesArray, operator);
    }
    return foundValuesArray;
  }
}
