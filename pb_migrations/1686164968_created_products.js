migrate((db) => {
  const collection = new Collection({
    "id": "krr6kjc1e8maqwt",
    "created": "2023-06-07 19:09:28.841Z",
    "updated": "2023-06-07 19:09:28.841Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ohagz0x7",
        "name": "art_number",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hmubsuzy",
        "name": "desc",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xlgpbs1u",
        "name": "thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [
            "200x0"
          ],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "iahln8n4",
        "name": "side_imgs",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [
            "200x0"
          ],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "glwmasbn",
        "name": "category",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "wzlq86jlvlyme6z",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "to7xvexi",
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
      },
      {
        "system": false,
        "id": "9qpztorg",
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
      },
      {
        "system": false,
        "id": "gw9tu9pk",
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
        "id": "0tlxlvez",
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
        "id": "2fwfcgcu",
        "name": "seo_keywords",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("krr6kjc1e8maqwt");

  return dao.deleteCollection(collection);
})
