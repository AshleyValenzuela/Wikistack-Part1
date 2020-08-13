const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Missing Title, Went Off To Find",
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "noSlug",
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "Content coming soon",
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
});
const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Jane Doe",
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "unknown@email.com",
    validate: {
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
