
function loadContent(whatContentToLoad) {
    var path = "index.html"
    // var path = "/scripts/test.json"

    let reader = new FileReader()
    reader.onload = function() {
        console.log(this.result)
    }
    reader.readAsText(path)
}