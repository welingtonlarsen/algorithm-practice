package wipro;

public class Palindrome {
    // Verify if a number is a Palindrome
    public static void main(String[] args) {
        int number = 171;
        String parsedNumber = String.valueOf(number);
        String reversed = reverse(parsedNumber);
        System.out.println("Is palindrom: " + parsedNumber.equals(reversed));
    }
    private static String reverse(String value) {
        StringBuilder invertedNumber = new StringBuilder();
        for (int index = (value.length() - 1); index >= 0; index--) {
            invertedNumber.append(value.charAt(index));
        }
        return invertedNumber.toString();
    }
}
