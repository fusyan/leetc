class Solution {
    public int reverse(int x) {
        try {
            StringBuffer sb = new StringBuffer();
            sb.append(x);
            String str = sb.reverse().toString();
            
            if (str.indexOf("-") >=0) {
                str = str.replace("-", "");
                str = "-" + str;
            }
            
            return Integer.parseInt(str);
        } catch (Exception e) {
            return 0;
        }
        
    }
}