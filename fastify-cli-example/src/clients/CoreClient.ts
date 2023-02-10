function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface User {
  id: string;
  name: string;
  age: number;
}

const user1: User = { id: "user-1", name: "Jim", age: 57 };

const user2: User = { id: "user-2", name: "Susan", age: 31 };

const user3: User = {
  id: "user-3",
  name: "georgia",
  age: 9,
};

const userList = [user1, user2, user3];

export async function getUsers(): Promise<Array<User>> {
  // simulate request to core
  await sleep(100);

  return userList;
}

export async function getUserById(id: string): Promise<User | undefined> {
  // simulate request to core
  await sleep(100);

  return userList.find((u) => u.id === id) ?? undefined;
}
