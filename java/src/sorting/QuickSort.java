package wipro;

import java.util.Arrays;

public class QuickSort {

  public static void main(String[] args) {
    int[] values = {9, 7, 8, 6, 3, 2, 1, 4};
    sort(values, 0, values.length - 1);
    Arrays.stream(values).boxed().forEach(System.out::println);
  }

  private static void sort(int[] array, int from, int end) {
    int quantity = end - from;
    if (quantity > 1) {
      int pivotPosition = partitionAndReturnPosition(array, from, end);
      sort(array, from, pivotPosition - 1);
      sort(array, pivotPosition + 1, end);
    }
  }

  private static int partitionAndReturnPosition(int[] array, int init, int end) {
    int pivotValue = array[end];
    int newPivotPosition = init;

    for (int position = init; position < end; position++) {
      if (array[position] < pivotValue) {
        changePositions(array, position, newPivotPosition);
        newPivotPosition++;
      }
    }

    changePositions(array, end, newPivotPosition);
    return newPivotPosition;
  }

  private static void changePositions(int[] array, int pos1, int pos2) {
    var pos1Value = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = pos1Value;
  }
}
