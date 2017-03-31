/**
 * Definition for singly-linked list.
 * class ListNode {
 *     public int val;
 *     public ListNode next;
 *     ListNode(int x) { val = x; next = null; }
 * }
 */
public class Solution {
    private class QueueNode implements Comparable<QueueNode> {
       public ListNode node;
       int index, value;
       public QueueNode(ListNode node1, int index) {
          this.node = node1;
          this.index = index;
          this.value = node1.val;
        }
 
        public int compareTo(QueueNode n) {
          if (value > n.value) return 1;
          if (value < n.value) return -1;
          return 0;
        }
      }
 public ListNode mergeKLists(ArrayList<ListNode> a) {
     PriorityQueue<QueueNode> pq = new PriorityQueue<>();
       ArrayList<ListNode> result = new ArrayList<>();
       ListNode temp = null;
       ListNode head = null;
       for(int i = 0; i < a.size(); i++) {
         if(a.get(i) != null) {
           QueueNode q = new QueueNode(a.get(i), i);
           pq.add(q);
         }
       }
      while(!pq.isEmpty()) {
       QueueNode popped = pq.remove();
       ListNode node = new ListNode(popped.node.val);
       if(result.isEmpty()) {
           head = node;
           temp = head;
       } else {
           temp.next = node;
           temp = temp.next;
       }
       //System.out.println("temp result is "+temp.val);
       result.add(temp);
       int nextIndex = popped.index+1;
       if(popped.node.next != null)
        pq.add(new QueueNode(popped.node.next, nextIndex));
      }
       return head;
 }
}