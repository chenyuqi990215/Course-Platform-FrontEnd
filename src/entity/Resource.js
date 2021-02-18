<<<<<<< HEAD
function Resource(id, name, url, origin='CSDN',cover, score=100, titleList="",contentList=""){
=======
function Resource(id, name, url, cover, origin='CSDN', score=100, amount="100万",titleList="",contentList=""){
>>>>>>> f5cfe86efeeb34028ef0a47b408ef6568dbd576f
    var obj = {};
    obj.id = id;
    obj.name = name;
    obj.url = url;
    obj.cover = cover;
    obj.origin = origin;
    obj.score = score;
    obj.amount = amount;
    obj.titleList = titleList;
    obj.contentList = contentList;
    obj.cover = cover;
    return obj;
}

export default Resource