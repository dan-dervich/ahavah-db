migrate((db) => {
  const collection = new Collection({
    "id": "lt5h4piz945184w",
    "created": "2023-06-07 19:01:36.274Z",
    "updated": "2023-06-07 19:01:36.274Z",
    "name": "sub_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1kqzepvt",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "c3so14tw",
        "name": "seo_keywords",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "g5t8hbgs",
        "name": "seo_desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "seqwu1mo",
        "name": "seo_title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6tcxasze",
        "name": "sub_sub_categories",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "3k9ir919qq0pyud",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lt5h4piz945184w");

  return dao.deleteCollection(collection);
})
