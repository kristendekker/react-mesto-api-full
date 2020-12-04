const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUser, updateUser, updateAvatarUser, getCurrentUser,
} = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).id(),
  }),
}), getUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).default('Жак-Ив Кусто'),
    about: Joi.string().min(2).max(30).default('Исследователь'),
  }),
}), updateUser);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/https?:\/\/(www\.)?[-./a-zA-Z0-9]+\.[-./a-zA-Z0-9]+#?/),
  }),
}), updateAvatarUser);

module.exports = router;