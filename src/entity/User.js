function User(user_id,name,school,telephone,portrait_url) {
    var obj = {};
    obj.user_id = user_id;
    obj.name = name;
    obj.school = school;
    obj.telephone = telephone;
    obj.portrait_url = portrait_url;
    obj.birth = "";
    obj.education = "";
    obj.signature = "";
    obj.sex = "";
    obj.city = "";
    obj.nickname = "";
    return obj;
}

export default User;