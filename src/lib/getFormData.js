import fetchAccount from "./fetchAccount.js";
import generateId from "./generateId.js";

const getFormData = async (form) => {
  const uid = generateId();
  const heading = form.elements.heading.value;
  const description = form.elements.description.value;
  const account = form.elements.account.value;
  const priority = form.elements.priority.value;
  const { avatar_url, login, html_url } = await fetchAccount(account);

  return {
    uid,
    heading,
    description,
    priority,
    avatar: avatar_url,
    accountName: login,
    accountUrl: html_url,
    status: "todo",
  };
};

export default getFormData;
