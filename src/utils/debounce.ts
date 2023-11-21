export const debounce = <T extends (..._args: any[]) => any>(
  func: T,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), wait);
  };
};
