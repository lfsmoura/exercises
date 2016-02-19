module.exports = function invertTree(node) {
  if (!node.left) {
    return;
  }
  invertTree(node.left);
  invertTree(node.right);
  var temp = node.right;
  node.right = node.left;
  node.left = temp;
}
