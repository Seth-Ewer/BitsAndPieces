Console.WriteLine("Hi!");


public class ListNode
{
  public int val;
  public ListNode next;
  public ListNode(int val = 0, ListNode next = null)
  {
    this.val = val;
    this.next = next;
  }
}


public class Solution
{
  //https://leetcode.com/problems/product-of-array-except-self/
  public int[] ProductExceptSelf(int[] nums)
  {
    int before = 1;
    int[] after = new int[nums.Length + 1];
    int[] output = new int[nums.Length];
    after[nums.Length] = 1;

    for (int i = nums.Length - 1; i >= 0; i--)
    {
      after[i] = nums[i] * after[i + 1];
    }

    for (int i = 0; i < nums.Length; i++)
    {
      output[i] = before * after[i + 1];
      before = before * nums[i];
    }
    return output;
  }

  //https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  public int MaxProfit(int[] prices)
  {
    var smallestSoFar = prices[0];
    var biggestDifference = 0;
    for (int i = 0; i < prices.Length; i++)
    {
      if (prices[i] < smallestSoFar)
      {
        smallestSoFar = prices[i];
      }
      else
      {
        if ((prices[i] - smallestSoFar) > biggestDifference)
        {
          biggestDifference = (prices[i] - smallestSoFar);
        }
      }
    }
    return biggestDifference;
  }

  //https://leetcode.com/problems/two-sum/
  public int[] TwoSum(int[] nums, int target)
  {
    for (int i = 0; i < nums.Length; i++)
    {
      for (int j = i + 1; j < nums.Length; j++)
      {
        if ((nums[j] + nums[i]) == target)
        {
          return [i, j];
        }
      }
    }
    return [0, 0];
  }

  //https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
  public int FindMin(int[] nums)
  {
    int start = 0;
    int end = nums.Length - 1;
    int mid = end / 2;
    if (nums[start] <= nums[end])
    {
      return nums[start];
    }

    while (true)
    {
      if (start == mid || end == mid)
      {
        if (nums[start] > nums[end])
        {
          return nums[end];
        }
        return nums[start];
      }
      if (nums[start] <= nums[mid])
      {
        start = mid;
        mid = (start + end) / 2;
      }
      else
      {
        end = mid;
        mid = (start + end) / 2;
      }
    }
  }

  //https://leetcode.com/problems/sum-of-two-integers/
  public int GetSum(int a, int b)
  {
    var and = a & b;
    var or = a ^ b;
    while (and != 0)
    {
      and = and << 1;
      (and, or) = (and & or, and ^ or);
    }
    return or;
  }

  //https://leetcode.com/problems/reverse-bits/
  public int ReverseBits(int n)
  {
    int a = 0;
    for (int i = 0; i < 32; i++)
    {
      a = a * 2;
      if (n % 2 == 1)
      {
        a++;
        n--;
      }
      n = n / 2;
    }
    return a;
  }

  //https://leetcode.com/problems/missing-number/
  public int MissingNumber(int[] nums)
  {
    int real = nums.Length;
    int fake = 0;
    for (int i = 0; i < nums.Length; i++)
    {
      real += i;
      fake += nums[i];
    }
    return real - fake;
  }

  //https://leetcode.com/problems/counting-bits/
  public int[] CountBits(int n)
  {
    var output = new int[n + 1];
    output[0] = 0;
    var iter = 0;
    var loop = 1;
    for (int i = 1; i <= n; i++)
    {
      output[i] = output[iter] + 1;
      iter++;
      if (iter >= loop)
      {
        iter = 0;
        loop *= 2;
      }
    }
    return output;
  }

  //https://leetcode.com/problems/number-of-1-bits/
  public int HammingWeight(int n)
  {
    if (n == 1)
    {
      return 1;
    }
    else if (n % 2 == 1)
    {
      return 1 + HammingWeight((n - 1) / 2);
    }
    else
    {
      return HammingWeight(n / 2);
    }
  }

  //https://leetcode.com/problems/maximum-subarray/
  public int MaxSubArray(int[] nums)
  {
    var max = nums[0];
    var currentMax = 0;
    for (int i = 0; i < nums.Length; i++)
    {
      if (nums[i] > max)
      {
        max = nums[i];
      }
      if (currentMax + nums[i] > 0)
      {
        currentMax += nums[i];

        if (currentMax > max)
        {
          max = currentMax;
        }
      }
      else
      {
        currentMax = 0;
      }
    }
    return max;
  }

  //https://leetcode.com/problems/contains-duplicate/
  public bool ContainsDuplicate(int[] nums)
  {
    var dict = new Dictionary<int, bool>();

    foreach (int number in nums)
    {
      if (dict.ContainsKey(number))
      {
        return true;
      }
      else
      {
        dict[number] = true;
      }
    }
    return false;
  }

  //https://leetcode.com/problems/container-with-most-water/
  public int MaxArea(int[] height)
  {
    int max = 0;
    int left = 0;
    int right = height.Length - 1;

    while (left < right)
    {
      if (height[left] > height[right])
      {
        if (max < height[right] * (right - left))
        {
          max = height[right] * (right - left);
        }
        right--;
      }
      else
      {
        if (max < height[left] * (right - left))
        {
          max = height[left] * (right - left);
        }
        left++;
      }
    }
    return max;

  }

  //https://leetcode.com/problems/remove-nth-node-from-end-of-list/
  public ListNode RemoveNthFromEnd(ListNode head, int n)
  {
    if (head == null) return null;

    var nth = head;
    for (int i = 0; i < n; i++)
    {
      if (nth.next == null) return head.next;
      nth = nth.next;
    }
    var temp = head;
    while (nth.next != null)
    {
      nth = nth.next;
      temp = temp.next;
    }
    temp.next = temp.next.next;

    return head;
  }

  //https://leetcode.com/problems/longest-substring-without-repeating-characters/
  public int LengthOfLongestSubstring(string s)
  {
    if (s.Length == 0) return 0;
    int max = 0;
    int start = 0;
    var letters = new Dictionary<char, int>();

    for (int i = 0; i < s.Length; i++)
    {
      if (letters.ContainsKey(s[i]) && letters[s[i]] >= start)
      {
        start = letters[s[i]] + 1;
        letters[s[i]] = i;
      }
      else
      {
        letters[s[i]] = i;
      }
      if (max < (i - start + 1)) max = i - start + 1;
    }
    return max;
  }
}