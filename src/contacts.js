const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  let  child_list=[]
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    child_list.push(child)
  }
  child_list.forEach(elem=>fragment.appendChild(elem))
  contacts.appendChild(fragment);
}
contacts.addEventListener("scroll", (e) => {
  const topItemIndex = itemOffsets.findIndex(
    (offset) => contacts.scrollTop - offset <= -18
  );
  if (topItemIndex !== -1) {
    stickyHeader.textContent = items[topItemIndex].textContent;
  }
});

addContacts();
const items = Array.from(contacts.getElementsByClassName("contact"));
const itemOffsets = items.map((item) => item.offsetTop);