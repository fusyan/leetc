/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode retLn = new ListNode(0);
        ListNode bufLn = retLn;
        int kuriagari = 0;
        
        while (l1 != null || l2 != null) {
            int intL1 = (l1 != null) ? l1.val: 0;
            int intL2 = (l2 != null) ? l2.val: 0;
            int sum = intL1 + intL2 + kuriagari;
            
            if (sum >= 10) {
                kuriagari = 1;
                sum = sum - 10;
            } else {
                kuriagari = 0;
            }
            
            bufLn.next = new ListNode(sum);
            bufLn = bufLn.next;
            
            if (l1 != null) {l1 = l1.next;}
            if (l2 != null) {l2 = l2.next;}
        }
        
        if (kuriagari == 1) {
            bufLn.next = new ListNode(1);
        }
        
        return retLn.next;
    }
}