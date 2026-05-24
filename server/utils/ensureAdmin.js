import User from "../models/User.js";

const ensureAdmin = async () => {
  const email = process.env.ADMIN_EMAIL || "admin@abhiyan.dev";
  const username = process.env.ADMIN_USERNAME || "abhiyan";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    console.warn("ADMIN_PASSWORD not set; admin user was not synced.");
    return;
  }

  try {
    const existing = await User.findOne({ email });

    if (existing) {
      existing.username = username;
      existing.password = password;
      await existing.save();
      console.log(`Admin synced: ${email}`);
      return;
    }

    await User.create({ username, email, password });
    console.log(`Admin created: ${email}`);
  } catch (error) {
    console.warn(`Admin sync skipped: ${error.message}`);
  }
};

export default ensureAdmin;
