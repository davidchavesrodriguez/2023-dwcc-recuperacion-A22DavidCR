let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {
        "Red Apples": {},
        "Green Apples": {}
      },
      magnolia: {},
    },
  },
};

let list= document.getElementById("list")

function createBranch(container, objeto){
    for (const key in objeto) {
        let rama= document.createElement("li")
        rama.innerText= key;
        container.appendChild(rama);

        if(Object.keys(objeto[key]).length > 0) {
            let subUl= document.createElement("ul");
            rama.appendChild(subUl);
            createBranch(subUl, objeto[key])
            
            
        }
    }
}

createBranch(list, arbore)

