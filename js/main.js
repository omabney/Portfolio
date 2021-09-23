const links = [
    {
        label : "Week 1",
        url: "week1/index.html"
    },
   // {
    //    label : "Week 2",
    //    url: "week2/index.html"
    //}
]


let htmllist = document.getElementById("weekly-content");

for(let i=0;i<links.length;i++){
    let li =document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute("href" , links[i]["url"]);
    a.innerText = links[i]["label"];
    li.appendChild(a);
    htmllist.appendChild(li);
}
