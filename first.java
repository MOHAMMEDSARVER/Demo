import java.util.*;

class Demo
{
    public static void main(String[] args) {
        String s="bbbbb";
        System.out.println(lengthOfLongestSubstring(s));

    }
    public static int lengthOfLongestSubstring(String s) {
        int len=0;
		int max=0;
        String[] arr=s.split(" ");
        List<Character> list = new ArrayList();
       

        for(String a:arr)
        {
            char b[]=a.toCharArray();
            for(char c:b)
            {
                if(!list.contains(c))
                {
                    list.add(c);
                    len++;
                }
                else
                {
                    break;
                }
            }
			 if (len > max)
                    {
                        max=len;
                        len=0;
						list.clear();
                    }
        }
        return len;
        
    }
}
