package wipro;

public class Fibonatti {
    public static void main(String[] args) {
        // calculate the N value from de sequence
        System.out.println(calculateValueInPosition(5));

        System.out.println("---------------------");

        // show all values until N
        for (int currentPosition = 0; currentPosition <= 5; currentPosition++) {
            System.out.println(calculateValueInPosition(currentPosition));
        }
    }

    private static int calculateValueInPosition(int position) {
        if (position < 2) return position;
        return calculateValueInPosition(position - 2) + calculateValueInPosition(position - 1);
    }
}
