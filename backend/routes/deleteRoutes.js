const express = require("express");
const router = express.Router();
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//-------------------------------------admin routes-------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
router
  .route("/event/:id")
  .delete(require("../controllers/DeleteControllers/admin/event"));
module.exports = router;
