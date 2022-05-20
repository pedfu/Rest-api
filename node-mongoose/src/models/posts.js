import Mongoose from 'mongoose';

const schema = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
}, {
    timestamps: {
        publishDate: true
    }
})


const PostsModel = Mongoose.model('Posts', schema);

export default PostsModel