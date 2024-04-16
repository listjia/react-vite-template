function buildTree(arr) {
    const root = { children: [] }; // 创建一个虚拟根节点
    const stack = [root]; // 初始化栈，栈底是虚拟根节点

    arr.forEach((item) => {
        const newNode = { ...item }; // 创建一个新节点
        let parent = stack[stack.length - 1]; // 获取栈顶元素作为当前父节点

        // 寻找正确的父节点
        while (stack.length > 0 && newNode.level <= parent.level) {
            stack.pop(); // 如果当前节点的level不大于父节点的level，从栈中移除父节点
            parent = stack[stack.length - 1]; // 更新父节点为新的栈顶元素
        }

        // 将新节点添加到找到的父节点的children数组中
        if (!parent.children) {
            parent.children = [];
        }
        parent.children.push(newNode);

        // 将新节点压入栈中
        stack.push(newNode);
    });

    return root.children; // 返回构建好的树形结构
}

// 测试数据
const arr = [
    {text:'1.文章目录', children:[], level:2},
    {text:'1.1文章目录', children:[], level:3},
    {text:'1.2文章目录', children:[], level:3},
    {text:'1.1.1文章目录', children:[], level:4},
    {text:'2.文章目录', children:[], level:2},
    {text:'2.1文章目录', children:[], level:3},
];

console.log(buildTree(arr));
