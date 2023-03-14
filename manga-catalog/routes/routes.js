const { Router } = require('express');
const mangaController = require('../controllers/mangaControllers');

const router = Router();

router.get('/manga', mangaController.getManga);
router.get('/manga/toprated', mangaController.getTopRatedManga);
router.get('/manga/trending', mangaController.getTrendingManga);
router.get('/manga/action', mangaController.getActionManga);
router.get('/manga/drama', mangaController.getDramaManga);
router.get('/manga/sports', mangaController.getSportsManga);
router.get('/manga/comedy', mangaController.getComedyManga);
router.get('/manga/awardwinning', mangaController.getAwardWinning);
router.get('/manga/ongoing', mangaController.getOngoing);

module.exports = router;
