const getList = (author, keyword) => {

};

const getDetail = (id) => {
    
};

const newBlog = (blogData = {}) => {

    console.log('newBlog blogData...', blogData);

    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('update blog', id, blogData);

    return true;
}

const delBlog = (id) => {
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
};
