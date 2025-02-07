var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    linkColor: themeStyle.colors.links,
    fontSize: '20px'
  }
});

var siteConfig = {
  version: 2,
  disableInlineTableFilterButtons: false, // disable option for adding filters by clicking table cells. See https://github.com/gbif/hosted-portals/issues/274
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey', 'datasetKey', 'datasetSearch'],
  },
  availableCatalogues: ['COLLECTION', 'OCCURRENCE', 'DATASET'],
  occurrence: {
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'collectionKey', 'catalogNumber', 'recordedBy', , 'gadmGid', 'hasCoordinate', 'q'],
    excludedFilters: ['occurrenceStatus', 'networkKey', 'institutionKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    defaultTableColumns: ['features', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    mapSettings: {
      lat: 4.256423432466043,
      lng: -73.76639776334413,
      zoom: 10
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
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
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  collection: {
    // filters on the grscicoll institution v1 API https://www.gbif.org/developer/summary
    // https://hp-theme.gbif-staging.org/data-exploration-config
    rootFilter: {
      institutionKey: ['e85150f2-7c38-46c2-9dac-b3a895c0bf6d']
    },
    excludedFilters: ['institutionKeySingle'],
  },
  dataset: {
    rootFilter: { publishingOrg: 'eac88d99-9f6c-4031-8fc4-8088f0e0dfe7' },
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },
    //apiKeys: {
    //maptiler: "GET_YOUR_OWN_TOKEN", // https://github.com/gbif/hosted-portals/issues/229
    //mapbox: "GET_YOUR_OWN__TOKEN"
  //},
  maps: {
    locale: 'es',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  messages: {
    "catalogues.occurrences": "Especímenes"
  }
};