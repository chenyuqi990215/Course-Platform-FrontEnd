function Course(id, name, url, cover, origin='BiliBili', score=100, titleList="",universityList="",contentList=""){
    var obj = {};
    obj.name = name;
    obj.url = url;
    obj.cover = cover;
    obj.origin = origin;
    obj.score = score;
    obj.titleList = titleList;
    obj.univerityList = universityList;
    obj.contentList = contentList;
    return obj;
}

export default Course;