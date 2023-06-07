migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3k9ir919qq0pyud")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3k9ir919qq0pyud")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
