function Resource(id, name, url, origin='CSDN',cover, score=100, titleList="",contentList=""){
    var obj = {};
    obj.id = id;
    obj.name = name;
    obj.url = url;
    obj.origin = origin;
    obj.score = score;
    obj.titleList = titleList;
    obj.contentList = contentList;
    obj.cover = cover;
    return obj;
}

export default Resource