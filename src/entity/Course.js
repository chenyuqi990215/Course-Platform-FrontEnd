function Course(id, name, url, cover, origin='BiliBili', score=100, amount="100万", titleList="",universityList="",contentList=""){
    var obj = {};
    obj.id = id;
    obj.name = name;
    obj.url = url;
    obj.cover = cover;
    obj.origin = origin;
    obj.score = score;
    obj.amount = amount;
    obj.titleList = titleList;
    obj.universityList = universityList;
    obj.contentList = contentList;
    return obj;
}

export default Course