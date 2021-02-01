import assert from 'assert'

/**
 * 数值累加
 * @param args 数值数组
 * @returns 数值累加结果
 */
export function addNumber(args: number[]) {
  return args.reduce((result, value) => {
    assert.ok(Number.isFinite(value))
    return result + value
  }, 0)
}

/**
 * 数值累加（数值用字符串表示）
 * @param args 数值数组（数值用字符串表示）
 * @returns 数值累加结果
 */
export function addStrNum(args: string[]) {
  const numList = args.map((value) => Number(value))
  return addNumber(numList)
}
