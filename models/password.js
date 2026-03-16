import bcryptjs from "bcryptjs";

async function hash(password) {
  const rounds = getNumberOfRounds();
  const pepper = process.env.PEPPER_PASSWORD || "";
  return await bcryptjs.hash(`${pepper}${password}`, rounds);
}

function getNumberOfRounds() {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

async function compare(providedPassword, storedPassword) {
  const pepper = process.env.PEPPER_PASSWORD || "";
  return await bcryptjs.compare(`${pepper}${providedPassword}`, storedPassword);
}

const password = { hash, compare };

export default password;
