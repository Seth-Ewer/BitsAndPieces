"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    val;
    next;
    v = false;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function ListNodeConstructor(valArr) {
    var val = valArr[0] ? (valArr.shift()) : 0;
    var next = valArr.length > 0 ? ListNodeConstructor(valArr) : null;
    return new ListNode(val, next);
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
function mergeKListsRecursion(lists, list) {
    if (list && lists[0]) {
        if (list.val <= lists[0].val) {
            list.next = mergeKListsRecursion(lists, list.next);
            return list;
        }
        else {
            var newFirstList = lists.shift();
            var newIndex = lists.findIndex(a => a.val > list.val);
            if (newIndex == -1) {
                lists.push(list);
            }
            else {
                lists.splice(newIndex, 0, list);
            }
            newFirstList.next = mergeKListsRecursion(lists, newFirstList.next);
            return newFirstList;
        }
    }
    else if (lists[0]) {
        var temp = lists.shift();
        if (temp) {
            temp.next = mergeKListsRecursion(lists, temp.next);
            return temp;
        }
        else {
            return null;
        }
    }
    else {
        return list;
    }
}
function mergeKLists(lists) {
    if (lists) {
        lists = lists.filter(a => a);
        lists.sort((a, b) => a.val - b.val);
        var temp = lists.shift();
        if (temp) {
            temp.next = mergeKListsRecursion(lists, temp.next);
            return temp;
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}
;
function removeRecurseHelper(currentNode, targetNode) {
    if (targetNode && currentNode) {
        currentNode.next = removeRecurseHelper(currentNode.next, targetNode.next);
        return currentNode;
    }
    else {
        return currentNode?.next ? currentNode.next : null;
    }
}
function removeNthFromEnd(head, n) {
    if (head) {
        var check = head;
        for (var i = 0; i < n; i++) {
            if (check?.next) {
                check = check.next;
            }
            else {
                check = null;
                break;
            }
        }
        return removeRecurseHelper(head, check);
    }
    else {
        return null;
    }
}
;
function reorderList(head) {
    var fast = head;
    var slow = head;
    while (fast?.next?.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = slow.next;
    var next = null;
    while (slow?.next) {
        var temp = slow.next;
        slow.next = next;
        next = slow;
        slow = temp;
    }
    slow.next = next;
    reorderMerge(head, slow);
}
;
function reorderMerge(list1, list2) {
    if (list1) {
        if (list2) {
            list1.next = reorderMerge(list2, list1.next);
            return list1;
        }
        else if (list1.next) {
            return null;
        }
        else {
            list1.next = reorderMerge(list2, list1.next);
            return list1;
        }
    }
    return null;
}
var node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
//reverseList(node);
var point = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4, null))));
point.next.next.next = point.next;
//hasCycle(point);
var lOne = new ListNode(1, new ListNode(2, new ListNode(4, null)));
var lTwo = new ListNode(1, new ListNode(3, new ListNode(4, null)));
//mergeTwoLists(lOne, lTwo);
var MergeKListsTest = [ListNodeConstructor([1, 4, 5]), ListNodeConstructor([1, 3, 4]), ListNodeConstructor([2, 6])];
//mergeKLists(MergeKListsTest);
var ReOrderList = ListNodeConstructor([1, 2, 3, 4]);
reorderList(ReOrderList);
while (ReOrderList) {
    console.log(ReOrderList);
    ReOrderList = ReOrderList.next;
}
console.log("");
//# sourceMappingURL=app.js.map