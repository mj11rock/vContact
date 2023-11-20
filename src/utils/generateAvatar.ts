export function generateAvatar(name: string): string {
  const transformedName = name.split(" ").join("+");
  return `https://ui-avatars.com/api/?name=${transformedName}&size=128&rounded=true&background=0D8ABC&color=fff`;
}
