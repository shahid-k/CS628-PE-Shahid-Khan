import express from 'express'
import db from '../db/conn.mjs'
import {ObjectId} from 'mongodb'
// import cors from 'cors';

const router = express.Router()

router.get("/", async (req, res) => {
  let collection = await db.collection('recipes')
  let results = await collection.find({}).toArray()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(results)
  res.send(results).status(200)
});

// This section will help you get a single record by id
router.get('/:id', async (req, res) => {
  let collection = await db.collection('recipes')
  let query = {_id: new ObjectId(req.params.id)}
  let result = await collection.findOne(query)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!result) res.send('Not found').status(404)
  else res.send(result).status(200)
})

// create a new record
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    ingredients: req.body?.ingredients,
    cost: req.body?.cost,
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let collection = await db.collection("recipes")
  let result = await collection.insertOne(newDocument)
  res.send(result).status(204)
})

// update a record by id
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) }
  const updates =  {
    $set: {
      name: req.body.name,
      ingredients: req.body.ingredients,
      price: req.body.price
    }
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let collection = await db.collection("recipes")
  let result = await collection.updateOne(query, updates)

  res.send(result).status(200)
});

// delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) }

  const collection = db.collection("recipes")
  let result = await collection.deleteOne(query)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(result).status(200)
})

export default router