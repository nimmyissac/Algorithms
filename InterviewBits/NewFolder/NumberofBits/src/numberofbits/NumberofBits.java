/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package numberofbits;

/**
 *
 * @author nimmyissac
 */
public class NumberofBits {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      NumberofBits s = new NumberofBits();
      System.out.println(s.numSetBits(1));
      
    }
    //public class Solution {
      public int numSetBits(long A) {
       int count = 0;
       while(A>0) {
         count += A & 1;
         A = (A >> 1);
       }
       return count;
      }
//}

    
}
