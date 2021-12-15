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
    },
    {
        label: "Week 5",
        url: "week5/index.html"
    },
    {
        label: "Week 6",
        url: "week6/index.html"
    },
    {
        label: "Week 7",
        url: "week7/index.html"
    },
    {
        label: "Week 8",
        url: "week8/index.html"
    },
    {
        label: "Week 9",
        url: "week9/index.html"
    },
    {
        label: "Week 10",
        url: "week10/index.html"
    },
    {
        label: "Week 11",
        url: "week11/index.html"
    },
    {
        label: "Week 12",
        url: "week12/index.html"
    },
    {
        label: "Week 13",
        url: "week13/index.html"
    },
    {
        label: "Week 14",
        url: "week14/index.html"
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

   