package wipro;

public class PrimeNumber {
    // verify if the number is Prime
    public static void main(String[] args) {
        int numberToVerify = 1;
        System.out.println(verifyIsPrime(numberToVerify));
    }

    private static boolean verifyIsPrime(int number) {
        for (int actual = 2; actual < number; actual++) {
            if (number % actual == 0) return false;
        }
        return true;
    }
}
