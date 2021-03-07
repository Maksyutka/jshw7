let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC / DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let listContainer = document.createElement('div')
let orderList = document.createElement("ol");
let numberOfListItems = playList.length;

document.getElementsByTagName('body')[0].appendChild(listContainer);
listContainer.appendChild(orderList);

for (let i = 0; i < numberOfListItems; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = playList[i].author + " - " + playList[i].song;
    orderList.appendChild(listItem);
}