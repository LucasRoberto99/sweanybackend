import bcrypt from "bcrypt";

export default async function (password, hash) {
  const pepper = process.env.PEPPER;

  const pepperPassword = password + pepper;

  const result = await bcrypt.compare(pepperPassword, hash);

  return result;
}
