define({ "api": [
  {
    "type": "get",
    "url": "/summary",
    "title": "List Global Summary",
    "group": "summary",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "summary",
            "description": "<p>Countries list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summaries.Country",
            "description": "<p>Country Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summaries.CountryCode",
            "description": "<p>Country Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summaries.Slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.NewConfirmed",
            "description": "<p>New Confirmed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.TotalConfirmed",
            "description": "<p>Total Confirmed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.NewDeaths",
            "description": "<p>New Deaths</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.TotalDeaths",
            "description": "<p>Total Deaths</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.NewRecovered",
            "description": "<p>Cases recovered</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.TotalRecovered",
            "description": "<p>Total Recovered Cases</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "summaries.Date",
            "description": "<p>summary date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"done\": false\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/routes/summary.js",
    "groupTitle": "summary",
    "name": "GetSummary"
  }
] });
