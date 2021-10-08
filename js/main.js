const links = [
    {
    label: "Week 1",
    url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    },
    {
        label: "Week 4",
        url: "week4/index.html"
    }
]

let htmlList = document.getElementById("weekly-Content");
for(let i=0; i< links.length;i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute("href",links[i]["url"]);
    a.innerText = links[i]["label"];
    li.appendChild(a);
    htmlList.appendChild(li);
}

   