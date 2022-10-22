package wipro;

public class Armstrong {

  public static void main(String[] args) {
    // verify is armstrong number
    System.out.println("153".equals(sumPotencies("153")));
  }

  private static String sumPotencies(String number) {
    int numberLength = number.length();
    int sum = 0;
    for (int index = 0; index < numberLength; index++) {
      int actual = Integer.parseInt(String.valueOf(number.charAt(index)));
      int pontency = Double.valueOf(Math.pow(actual, numberLength)).intValue();
      sum += pontency;
    }
    return String.valueOf(sum);
  }
}
