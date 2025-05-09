var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    linkColor: themeStyle.colors.links,
    fontSize: '20px'
  }
});

var siteConfig = {
  "version": 3,
  "pages": [
      {
          "id": "occurrenceSearch"
      },
      {
          "id": "collectionSearch"
      },
      {
          "id": "collectionKey"
      },
      {
          "id": "institutionSearch"
      },
      {
          "id": "institutionKey"
      },
      {
          "id": "datasetKey"
      },
      {
          "id": "datasetSearch"
      }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
      "COLLECTION",
      "OCCURRENCE",
      "DATASET"
  ],
  "dataHeader": {
      "enableApiPopup": false,
      "enableInfoPopup": false
  },
  "theme": {
      "primary": "#91b23a",
      "borderRadius": 3,
      "stickyOffset": "0px"
  },
  "maps": {
      "locale": "es",
      "mapStyles": {
          "defaultProjection": "MERCATOR",
          "defaultMapStyle": "BRIGHT",
          "options": {
              "ARCTIC": [
                  "NATURAL",
                  "BRIGHT"
              ],
              "PLATE_CAREE": [
                  "NATURAL",
                  "BRIGHT",
                  "DARK"
              ],
              "MERCATOR": [
                  "NATURAL",
                  "BRIGHT",
                  "SATELLITE",
                  "DARK"
              ],
              "ANTARCTIC": [
                  "NATURAL",
                  "BRIGHT",
                  "DARK"
              ]
          }
      }
  },
  "languages": [
      {
          "code": "es",
          "localeCode": "es",
          "label": "Español",
          "default": true,
          "textDirection": "ltr",
          "cmsLocale": "es",
          "vocabularyLocale": "es-ES",
          "iso3LetterCode": "spa",
          "gbifOrgLocalePrefix": "/es",
          "grSciCollLocalePrefix": "/es",
          "mapTileLocale": "es"
      },
      {
          "code": "en",
          "localeCode": "en",
          "label": "English",
          "default": false,
          "textDirection": "ltr",
          "iso3LetterCode": "eng",
          "cmsLocale": "en-GB",
          "gbifOrgLocalePrefix": "",
          "mapTileLocale": "en"
      }
  ],
  "messages": {
      "es": {
          "catalogues.occurrences": "Especímenes"
      },
      "en": {
          "catalogues.occurrences": "Specimens"
      }
  },
  "occurrenceSearch": {
      "scope": {
          "type": "and",
          "predicates": [
              {
                  "type": "or",
                  "predicates": [
                      {
                          "type": "isNotNull",
                          "key": "institutionKey"
                      },
                      {
                          "type": "isNotNull",
                          "key": "collectionKey"
                      }
                  ]
              },
              {
                  "type": "equals",
                  "key": "publishingOrg",
                  "value": "eac88d99-9f6c-4031-8fc4-8088f0e0dfe7"
              }
          ]
      },
      "highlightedFilters": [
          "taxonKey",
          "verbatimScientificName",
          "collectionKey",
          "catalogNumber",
          "recordedBy",
          null,
          "gadmGid",
          "hasCoordinate",
          "q"
      ],
      "excludedFilters": [
          "occurrenceStatus",
          "networkKey",
          "institutionKey",
          "hostingOrganizationKey",
          "protocol",
          "publishingCountry",
          "institutionCode",
          "collectionCode"
      ],
      "defaultEnabledTableColumns": [
          "features",
          "collectionKey",
          "catalogNumber",
          "country",
          "year",
          "recordedBy",
          "identifiedBy"
      ],
      "tabs": [
          "table",
          "map",
          "gallery",
          "datasets",
          "download"
      ],
      "mapSettings": {
          "lat": 4.256423432466043,
          "lng": -73.76639776334413,
          "zoom": 10
      }
  },
  "collectionSearch": {
      "scope": {
          "institutionKey": [
              "e85150f2-7c38-46c2-9dac-b3a895c0bf6d"
          ]
      },
      "excludedFilters": [
          "institutionKey"
      ]
  },
  "institutionSearch": {},
  "datasetSearch": {
      "scope": {
          "publishingOrg": "eac88d99-9f6c-4031-8fc4-8088f0e0dfe7"
      },
      "highlightedFilters": [
          "q",
          "publishingOrg",
          "type",
          "license"
      ],
      "excludedFilters": [
          "publishingCountry"
      ]
  },
  "publisherSearch": {},
  "literatureSearch": {}
};