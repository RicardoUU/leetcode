// react render function 实现

function render(vnode, container) {
  return container.appendChild(_render(vnode));
}

function _render(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  const { type, props } = vnode;
  const node = document.createElement(type);
  Object.keys(props).forEach(key => {
    const value = props[key];
    setAttribute(node, key, value);
  });
  props.children.forEach(child => render(child, node));
  return node;
}

function setAttribute(node, key, value) {
  if (key === "className") {
    key = "class";
  }

  if (/on\w+/.test(key)) {
    key = key.toLowerCase();
    node[key] = value || "";
  } else {
    node.setAttribute(key, value);
  }
}

// test
const vdom = {
  type: "ul",
  props: {
    className: "list",
    children: [
      {
        type: "li",
        props: { children: "item1" }
      },
      {
        type: "li",
        props: { children: "item2" }
      }
    ]
  }
};

render(vdom, document.body);
