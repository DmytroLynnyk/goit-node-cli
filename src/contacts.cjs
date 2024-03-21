const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("src", "db", "contacts.json");

async function listContacts() {
  await fs
    .readFile(contactsPath)
    .then((contacts) => {
      // console.log(JSON.parse(contacts.toString()));

      return JSON.parse(JSON.parse(contacts.toString()));
    })
    .catch((err) => {
      return err.message;
    });
}

async function getContactById(contactId) {
  await fs
    .readFile(contactsPath)
    .then((contacts) => {
      JSON.parse(contacts.toString()).map((contact) => {
        if (contact.id === contactId) {
          // console.log(contact);
          return contact;
        }
      });
    })
    .catch((err) => {
      return err.message;
    });
}

async function removeContact(contactId) {
  await fs
    .readFile(contactsPath)
    .then((contacts) => {
      JSON.parse(contacts.toString()).map((contact) => {
        if (contact.id === contactId) {
          // console.log(contact);
          return contact;
        }
      });
    })
    .catch((err) => {
      return err.message;
    });
}

async function addContact(name, email, phone) {
  const data = {
    id: "id",
    name: name,
    email: email,
    phone: phone,
  };

  await fs
    .appendFile(contactsPath, JSON.stringify(data))
    .then(() => {
      console.log(data);
      // return JSON.stringify(data);
    })

    .catch((err) => {
      return err.message;
    });

  // .then(console.log(JSON.stringify(data)));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

listContacts();

// getContactById();

// addContact("DimDim", "dimdim@gmail.com", "+380506005040");
