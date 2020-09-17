const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbworkout => res.json(dbworkout))
        .catch (err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(dbworkout => {
        res.json(dbworkout)
    })
    .catch(err => {
        res.json(err)
    });
});

router.post("/api/workouts/range", (req, res) => {
    Workout.create({})
    .then(dbworkout => res.json(dbworkout))
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;