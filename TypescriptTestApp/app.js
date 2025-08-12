"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
class ListNodePlusId {
    id;
    value;
    constructor(newId, newVal) {
        this.id = newId;
        this.value = newVal;
    }
}
function reverseList(head) {
    if (head) {
        var current = head;
        var next = null;
        while (current?.next) {
            var temp = current.next;
            current.next = next;
            next = current;
            current = temp;
        }
        return new ListNode(current?.val, next);
    }
    else {
        return null;
    }
}
;
function hasCycle(head) {
    if (head) {
        var point = head;
        while (point?.next != null) {
            if (point["v"] == true) {
                return true;
            }
            point["v"] = true;
        }
    }
    return false;
}
;
function mergeTwoLists(list1, list2) {
    if (list1 && list2) {
        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }
        else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
    else if (list1) {
        return list1;
    }
    else {
        return list2;
    }
}
;
var node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
//reverseList(node);
var point = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4, null))));
point.next.next.next = point.next;
hasCycle(point);
var lOne = new ListNode(1, new ListNode(2, new ListNode(4, null)));
var lTwo = new ListNode(1, new ListNode(3, new ListNode(4, null)));
//mergeTwoLists(lOne, lTwo);
//# sourceMappingURL=app.js.map