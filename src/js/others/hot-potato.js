import Queue from "../data-structures/queue";
// 击鼓传花游戏
export function hotPotato(elementsList, num) {
  // 创建队列
  const queue = new Queue();
  const eliminatedList = [];

  // 向队列添加数据
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  // 当人数大于一个人的时候继续游戏, 开始数数字
  while (queue.size() > 1) {
    // 不是elementsList的时候，重新加入队列的末尾
    // 是elementsList数字的时候，则删除
    // 3.1 elementsList数字之前的人重新加入到队列的末尾
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    // 3.2 num 对应的这个人，直接从队列中删除 或使用 queue.peek()
    winner: queue.dequeue(),
  };
}
