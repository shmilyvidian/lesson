var buildTree = function(inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }

        // 选择 post_idx 位置的元素作为当前子树根节点
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(root_val);

        // 下标减一
        post_idx--;
        // 构造右子树
        root.right = helper(index + 1, in_right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        return root;
    }

    // 从后序遍历的最后一个元素开始
    post_idx = postorder.length - 1;

    // 建立（元素，下标）键值对的哈希表
    let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);
}
// inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]

// 后序中右起第一位3肯定是根结点，我们可以据此找到中序中根结点的位置rootin；
// 中序中根结点左边就是左子树结点，右边就是右子树结点，即[左子树结点，根结点，右子树结点]，我们就可以得出左子树结点个数为int left = rootin - leftin;；
// 后序中结点分布应该是：[左子树结点，右子树结点，根结点]；
// 根据前一步确定的左子树个数，可以确定后序中左子树结点和右子树结点的范围；
// 如果我们要前序遍历生成二叉树的话，下一层递归应该是：
// 左子树：root->left = pre_order(中序左子树范围，后序左子树范围，中序序列，后序序列);；
// 右子树：root->right = pre_order(中序右子树范围，后序右子树范围，中序序列，后序序列);。
// 每一层递归都要返回当前根结点root；

class Solution {
    public:
        TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
            return pre_order(0, inorder.size() - 1, 0, inorder.size() - 1, inorder, postorder);
        }
        
        TreeNode *pre_order(int leftin, int rightin, int leftpost, int rightpost, vector<int> &in, vector<int> &post) {
            if (leftin > rightin) return NULL;
            TreeNode *root = new TreeNode(post[rightpost]);
            int rootin = leftin;
            while (rootin <= rightin && in[rootin] != post[rightpost]) rootin++;
            int left = rootin - leftin;
            root->left = pre_order(leftin, rootin - 1, leftpost, leftpost + left - 1, in, post);
            root->right = pre_order(rootin + 1, rightin, leftpost + left, rightpost - 1, in, post);
            return root;
        }
    };



    preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    