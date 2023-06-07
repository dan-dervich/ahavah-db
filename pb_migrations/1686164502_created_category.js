migrate((db) => {
  const collection = new Collection({
    "id": "wzlq86jlvlyme6z",
    "created": "2023-06-07 19:01:42.593Z",
    "updated": "2023-06-07 19:01:42.593Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "moyv9mta",
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
        "id": "nneyjbjo",
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
        "id": "4ks2y9ze",
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
        "id": "vnwfxeoe",
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
        "id": "in2gfclp",
        "name": "sub_categories",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "lt5h4piz945184w",
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
  const collection = dao.findCollectionByNameOrId("wzlq86jlvlyme6z");

  return dao.deleteCollection(collection);
})
