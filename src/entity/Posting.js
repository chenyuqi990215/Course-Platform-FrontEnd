function Posting(post_id,type,title,content,counter,comment_num,post_time,user_id)
{
    var obj = {}
    obj.post_id = post_id;
    obj.type = type;
    obj.title = title;
    obj.content = content;
    obj.counter = counter;
    obj.comment_num = comment_num;
    obj.post_time = post_time;
    obj.user_id = user_id;
    return obj;
}

export default Posting;