var items = {
    "c#": 0,
    "java": 0,
    "perl": 0,
    "fortern": 0
};
var votedObjects = document.getElementsByClassName('badge');
for(var i = 0, element; element = votedObjects[i++];) {
    element.onclick = function (event) {
        var id = this.getAttribute('data-index');
        items[id] += 1;
        this.innerHTML = "vote " + items[id];
        var sortItems = [];
        for(var vehicle in items) {
            sortItems.push([vehicle, items[vehicle]]);
        }

        sortItems.sort(function(a, b){return b[1]-a[1]});
        var parentOfList = document.getElementById('sortedLists');
        parentOfList.innerHTML = null;
        sortItems.forEach(function (item, index) {
            var li = document.createElement("li");
            var liText = document.createTextNode(item[0].charAt(0).toUpperCase() + item[0].slice(1) + " " + item[1]);
            li.appendChild(liText);
            parentOfList.appendChild(li);
        });
    }
}