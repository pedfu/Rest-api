import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})

const PostsModel = Mongoose.model('Posts', schema);

export default PostsModel;