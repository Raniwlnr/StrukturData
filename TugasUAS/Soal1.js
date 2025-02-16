class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function inorderTraversal(root) {
    let result = [];
    let stack = [];
    let current = root;
  
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left; // Masuk ke kiri terus hingga mentok
      }
  
      current = stack.pop(); // Ambil node terakhir yang dikunjungi
      result.push(current.val); // Kunjungi akar
  
      current = current.right; // Pindah ke kanan
    }
  
    return result;
  }
  
  // Membangun binary tree:
  //      1
  //       \
  //        2
  //       /
  //      3
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  
  console.log(inorderTraversal(root)); // Output: [1, 3, 2]
  