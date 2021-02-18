function User(user_id,name,school,telephone,portrait_url) {
    var obj = {};
    obj.user_id = user_id;
    obj.name = name;
    obj.school = school;
    obj.telephone = telephone;
    obj.portrait_url = portrait_url;
    return obj;
}

export default User;