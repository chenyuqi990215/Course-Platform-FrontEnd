function Resource(id, name, url, cover, origin='CSDN', score=100, amount="100万",titleList="",contentList=""){
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