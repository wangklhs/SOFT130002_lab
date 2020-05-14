const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

var parent = document.getElementsByClassName("flex-container justify")[0];
var items = [];
var h4s = [];
var box = [];
var h3s = [];
var p = [];
var button = [];
for (let i = 0; i < 4; i ++) {
    items.push(document.createElement("div"));
    items[i].className = "item";

    h4s.push(document.createElement("h4"));
    h4s[i].appendChild(document.createTextNode("Genre : " + works[i].tips));
    items[i].appendChild(h4s[i]);

    for (let j = 0; j < 2; j ++) {
        box.push(document.createElement("div"));
        h3s.push(document.createElement("h3"));
        box[2 * i + j].className = "inner-box";
        box[2 * i + j].appendChild(h3s[2 * i + j]);
        items[i].appendChild(box[2 * i + j]);

    }
    h3s[2 * i].appendChild(document.createTextNode(works[i].author));
    h3s[2 * i].style.display = "inline-block";
    h3s[2 * i + 1].appendChild(document.createTextNode("Popular Photos"));

    p.push(document.createElement("p"));
    p[i].style.display = "inline-block";
    p[i].style.margin = "0 15px 0 15px";
    p[i].style.width = "auto";
    p[i].appendChild(document.createTextNode("lifetime : " + works[i].lifetime));
    box[2 * i].appendChild(p[i]);

    let pictures = [];
    for (let k = 0; k < works[i].photos.length; k ++) {
        pictures.push(document.createElement("img"));
        pictures[k].width = "50";
        pictures[k].height = "50";
        pictures[k].style.margin = "4px 7px 0 0";
        pictures[k].src = works[i].photos[k];
        box[2 * i + 1].appendChild(pictures[k]);
    }

    button.push(document.createElement("button"));
    button[i].appendChild(document.createTextNode("Visit"));
    items[i].appendChild(button[i]);

    parent.appendChild(items[i]);
}
