import { tasks } from "../variables/index.js";
import fetchAccount from "./fetchAccount.js";
import formatDate from "./formatDate.js";
import generateId from "./generateId.js";

const handleSubmit = async (e) => {
  e.preventDefault();
  const todoBoard = document.querySelector(".todo .inner");

  const id = generateId();
  const heading = e.target.elements.heading.value;
  const description = e.target.elements.description.value;
  const dueDate = e.target.elements["due-date"].value;
  const account = e.target.elements.account.value;
  const accountData = await fetchAccount(account);
  const formattedDate = formatDate(dueDate);

  tasks.push({
    id: id,
    heading,
    description,
    dueDate: formattedDate,
    avatar: accountData.avatar_url,
    accountName: accountData.login,
    accountUrl: accountData.html_url,
    status: "todo",
  });

  localStorage.setItem("data", JSON.stringify(tasks));

  todoBoard.innerHTML += `
   <task-component
        id="${id}"
        heading="${heading}"
        description="${description}"
        due-date="${formattedDate}"
        avatar="${accountData.avatar_url}"
        account-url="${accountData.html_url}"
        account-name="${accountData.login}"
      >
  </task-component>`;

  console.log(tasks);
  e.target.reset();
};

export default handleSubmit;
