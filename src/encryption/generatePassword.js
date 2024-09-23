import bcrypt from "bcrypt";

export default async function (password) {
  const saltRounds = 10;

  const pepper = process.env.PEPPER;

  const pepperPassword = password + pepper;

  const hash = await bcrypt.hash(pepperPassword, saltRounds);

  return hash;
}
