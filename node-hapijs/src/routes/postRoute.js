import Joi from 'joi';
import PostsController from '../controllers/posts';
import UsersController from '../controllers/users';
import PostModel from '../models/posts';

const postsController = new PostsController(PostModel);

const postRoute = (server) => {
    server.route({
        method: 'GET',
        path: '/posts/{id?}',
        handler: (request, h) => postsController.find(request, h)
    })

    server.route({
        method: 'POST',
        path: '/posts',
        handler: (request, h) => postsController.create(request, h), 
        options: {
            validate: {
                payload: {
                    title: Joi.string().required(),
                    content: Joi.string().required(),
                    author: Joi.string().required(),
                    publishDate: Joi.date()
                }
            }
        }
    })

    server.route({
        method: 'PUT',
        path: '/posts/{id}',
        handler: (request, h) => postsController.update(request, h),
        options: {
            validate: {
                payload: {
                    title: Joi.string().required(),
                    content: Joi.string().required(),
                    author: Joi.string().required(),
                    publishDate: Joi.date()
                }
            }
        }
    }) 
    
    server.route({
        method: 'DELETE',
        path: '/posts/{id}',
        handler: (request, h) => postsController.delete(request, h)
    })
}
module.exports = postRoute