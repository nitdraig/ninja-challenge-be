const { v4: uuidv4 } = require("uuid");

const userSchema = {
  id: uuidv4(),
  name: "string",
  email: "string",
  birthDate: "string",
  address: {
    id: uuidv4(),
    street: "string",
    state: "string",
    city: "string",
    country: "string",
    zip: "string",
  },
};

module.exports = userSchema;
