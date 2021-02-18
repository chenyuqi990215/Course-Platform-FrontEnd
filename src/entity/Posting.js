function Posting(id,type,title,content,counter,post_time,user_id)
{
    var obj = {}
    obj.id = id;
    obj.type = type;
    obj.title = title;
    obj.content = content;
    obj.counter = counter;
    obj.post_time = post_time;
    obj.user_id = user_id;
    return obj;
}

export default Posting;