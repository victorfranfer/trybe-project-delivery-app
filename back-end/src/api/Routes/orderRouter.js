const { getAll } = require('../Controller/orderController');

const router = express.Router();

router.get('/', getAll);

module.exports = router;