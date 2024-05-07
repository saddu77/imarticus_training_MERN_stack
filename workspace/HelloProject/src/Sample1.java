import java.util.Scanner;

public class Sample1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 int[] priceOfPen= new int[5];
		 System.out.println("Enter Pen Price: ");
		 Scanner in=new Scanner(System.in);
		 for(int i=0;i<priceOfPen.length;i++)
		 priceOfPen[i]=in.nextInt();
		 for(int i=0;i<priceOfPen.length;i++)
		 System.out.print(priceOfPen[i]+" ");
		}
	}
