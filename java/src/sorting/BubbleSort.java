package wipro;

import java.util.Arrays;

public class BubbleSort {

  public static void main(String[] args) {
    int[] values = {9, 7, 8, 6, 3, 1, 2};
    boolean changedValue = true;

    while (changedValue) {
      changedValue = false;

      for (int i = 0; i < values.length - 1; i++) {
        if (values[i] > values[i+1]) {
          replaceWithNextPosition(values, i);
          changedValue = true;
        }
      }
    }

    Arrays.stream(values).boxed().toList().forEach(System.out::println);
  }

  private static void replaceWithNextPosition(int[] array, int currentPosition) {
    int nextPosition = currentPosition + 1;
    int aux = array[currentPosition];
    array[currentPosition] = array[nextPosition];
    array[nextPosition] = aux;
  }

}
