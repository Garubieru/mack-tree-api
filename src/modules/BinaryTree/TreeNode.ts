export class TreeNode<T> {
  constructor(public readonly value: T) {}

  private _rightNode: TreeNode<T> | null = null;

  private _leftNode: TreeNode<T> | null = null;

  get rightNode(): TreeNode<T> | null {
    return this._rightNode;
  }

  set rightNode(node: TreeNode<T> | null) {
    this._rightNode = node;
  }

  get leftNode(): TreeNode<T> | null {
    return this._leftNode;
  }

  set leftNode(node: TreeNode<T> | null) {
    this._leftNode = node;
  }
}
