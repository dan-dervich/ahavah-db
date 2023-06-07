migrate((db) => {
  const collection = new Collection({
    "id": "3k9ir919qq0pyud",
    "created": "2023-06-07 19:01:31.613Z",
    "updated": "2023-06-07 19:01:31.613Z",
    "name": "sub_sub_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "chrhmpc7",
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
        "id": "6oid824r",
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
        "id": "7ajwgag0",
        "name": "seo_description",
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
        "id": "gh0douo9",
        "name": "seo_title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("3k9ir919qq0pyud");

  return dao.deleteCollection(collection);
})
