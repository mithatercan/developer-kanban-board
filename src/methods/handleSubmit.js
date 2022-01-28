import { tasks } from "../variables/index.js";
import fetchAccount from "./fetchAccount.js";
import generateId from "./generateId.js";

const handleSubmit = async (e) => {
  e.preventDefault();
  const todoBoard = document.querySelector(".todo .inner");

  const id = generateId();
  const heading = e.target.elements.heading.value;
  const description = e.target.elements.description.value;
  const account = e.target.elements.account.value;
  const accountData = await fetchAccount(account);

  // FOR LOCAL STORAGE
  tasks.push({
    id: id,
    heading,
    description,
    avatar: accountData.avatar_url,
    accountName: accountData.login,
    accountUrl: accountData.html_url,
    status: "todo",
  });

  localStorage.setItem("data", JSON.stringify(tasks));

  // Append new task to the board

  todoBoard.innerHTML += `
   <task-component
        id="${id}"
        heading="${heading}"
        description="${description}"
        avatar="${accountData.avatar_url}"
        account-url="${accountData.html_url}"
        account-name="${accountData.login}"
      >
  </task-component>`;

  e.target.reset();
};

export default handleSubmit;
