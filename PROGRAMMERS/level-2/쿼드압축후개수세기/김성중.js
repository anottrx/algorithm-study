// 월간 코드 챌린지 시즌1

function solution(arr) {
    let [zeroCount, oneCount] = [0, 0];
  
    const isAllZero = (arr) => arr.flat().every((e) => e === 0);
    const isAllOne = (arr) => arr.flat().every((e) => e === 1);
  
    const calcCount = (arr) => {
      if (isAllZero(arr)) zeroCount += 1;
      if (isAllOne(arr)) oneCount += 1;
    };
  
    const recursive = (matrix) => {
      if (isAllOne(matrix) || isAllZero(matrix)) return calcCount(matrix);
  
      recursive(
        matrix
          .filter((_, i) => i < matrix.length / 2)
          .map((e) => e.filter((_, i) => i < matrix.length / 2))
      );
  
      recursive(
        matrix
          .filter((_, i) => i >= matrix.length / 2 && i < matrix.length)
          .map((e) => e.filter((_, i) => i < matrix.length / 2))
      );
  
      recursive(
        matrix
          .filter((_, i) => i < matrix.length / 2)
          .map((e) =>
            e.filter((_, i) => i >= matrix.length / 2 && i < matrix.length)
          )
      );
  
      recursive(
        matrix
          .filter((_, i) => i >= matrix.length / 2 && i < matrix.length)
          .map((e) =>
            e.filter((_, i) => i >= matrix.length / 2 && i < matrix.length)
          )
      );
    };
  
    recursive([...arr]);
  
    return [zeroCount, oneCount];
  }