const {getCharById} = require ('../controllers/getCharById');
const {login, logout} = require ('../controllers/login');
const {postFav} = require ('../controllers/postFav');
const {postUser} = require('../controllers/postUser');
const {deleteFav} = require('../controllers/deleteFav');

const router = require ('express').Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.get('/logout', logout);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);


module.exports = {
    router
}