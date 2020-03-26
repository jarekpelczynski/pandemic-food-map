/* Important: Change THE MAPTILER KEY (the one for Whozinberg.org is in now, it's sejRzrAFFIRh75t6tsm8) to YOUR OWN Maptiler Key. Get one here: https://www.maptiler.com/google-maps-platform-alternative/ */

module.exports = {
  "version": 8,
  "name": "Voyager",
  "metadata": {},
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://api.maptiler.com/tiles/v3/tiles.json?key=QX9JGAFI7be3x3CxorfF"
    }
  },
  "sprite": "https://api.maptiler.com/maps/voyager/sprite",
  "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=QX9JGAFI7be3x3CxorfF",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "background-color": "#fbf8f3",
        "background-opacity": 1
      }
    },
    {
      "id": "landcover",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "any",
        [
          "==",
          "class",
          "wood"
        ],
        [
          "==",
          "class",
          "grass"
        ],
        [
          "==",
          "subclass",
          "recreation_ground"
        ]
      ],
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "rgba(197, 225, 178, 0.2)"
            ],
            [
              9,
              "rgba(197, 225, 178, 0.25)"
            ],
            [
              11,
              "rgba(197, 225, 178, 0.35)"
            ],
            [
              13,
              "rgba(197, 225, 178, 0.4)"
            ],
            [
              15,
              "#e0ecd3"
            ]
          ]
        },
        "fill-opacity": 1
      }
    },
    {
      "id": "park_national_park",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "park",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "==",
          "class",
          "national_park"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "rgba(197, 225, 178, 0.2)"
            ],
            [
              9,
              "rgba(197, 225, 178, 0.25)"
            ],
            [
              11,
              "rgba(197, 225, 178, 0.35)"
            ],
            [
              13,
              "rgba(197, 225, 178, 0.4)"
            ],
            [
              15,
              "#e0ecd3"
            ]
          ]
        },
        "fill-opacity": 1,
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "park_nature_reserve",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "park",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "class",
          "nature_reserve"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": {
          "stops": [
            [
              8,
              "rgba(197, 225, 178, 0.2)"
            ],
            [
              9,
              "rgba(197, 225, 178, 0.25)"
            ],
            [
              11,
              "rgba(197, 225, 178, 0.35)"
            ],
            [
              13,
              "rgba(197, 225, 178, 0.4)"
            ],
            [
              15,
              "#e0ecd3"
            ]
          ]
        },
        "fill-opacity": {
          "stops": [
            [
              6,
              0.7
            ],
            [
              9,
              0.9
            ]
          ]
        }
      }
    },
    {
      "id": "landuse_residential",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "minzoom": 6,
      "filter": [
        "any",
        [
          "==",
          "class",
          "residential"
        ]
      ],
      "paint": {
        "fill-color": {
          "stops": [
            [
              5,
              "rgba(243, 234, 220, 0.5)"
            ],
            [
              8,
              "rgba(243, 234, 220, 0.45)"
            ],
            [
              9,
              "rgba(243, 234, 220, 0.4)"
            ],
            [
              11,
              "rgba(243, 234, 220, 0.35)"
            ],
            [
              13,
              "rgba(243, 234, 220, 0.3)"
            ],
            [
              15,
              "rgba(243, 234, 220, 0.25)"
            ],
            [
              16,
              "rgba(243, 234, 220, 0.15)"
            ]
          ]
        },
        "fill-opacity": {
          "stops": [
            [
              6,
              0.6
            ],
            [
              9,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "landuse",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "==",
          "class",
          "cemetery"
        ],
        [
          "==",
          "class",
          "stadium"
        ]
      ],
      "paint": {
        "fill-color": {
          "stops": [
            [
              8,
              "rgba(197, 225, 178, 0.2)"
            ],
            [
              9,
              "rgba(197, 225, 178, 0.25)"
            ],
            [
              11,
              "rgba(197, 225, 178, 0.35)"
            ],
            [
              13,
              "rgba(197, 225, 178, 0.4)"
            ],
            [
              15,
              "#e0ecd3"
            ]
          ]
        }
      }
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#cce7ea",
        "line-width": {
          "stops": [
            [
              8,
              0.5
            ],
            [
              9,
              1
            ],
            [
              15,
              2
            ],
            [
              16,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_county",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 9,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          6
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#d4d5d6"
            ],
            [
              5,
              "#d4d5d6"
            ],
            [
              6,
              "#e1c5c7"
            ]
          ]
        },
        "line-dasharray": {
          "stops": [
            [
              6,
              [
                1
              ]
            ],
            [
              7,
              [
                2,
                2
              ]
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              4,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_state",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          4
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#d4d5d6"
            ],
            [
              5,
              "#d4d5d6"
            ],
            [
              6,
              "#e1c5c7"
            ]
          ]
        },
        "line-dasharray": {
          "stops": [
            [
              6,
              [
                1
              ]
            ],
            [
              7,
              [
                2,
                2
              ]
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              4,
              0.5
            ],
            [
              7,
              1
            ],
            [
              8,
              1
            ],
            [
              9,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": "#b0d0d6",
        "fill-opacity": 1,
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "water_shadow",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": "rgba(203, 225, 228, 1)",
        "fill-opacity": 1,
        "fill-translate": {
          "stops": [
            [
              0,
              [
                0,
                2
              ]
            ],
            [
              6,
              [
                0,
                1
              ]
            ],
            [
              14,
              [
                0,
                1
              ]
            ],
            [
              17,
              [
                0,
                2
              ]
            ]
          ]
        },
        "fill-translate-anchor": "map"
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "class",
          "runway"
        ]
      ],
      "layout": {
        "line-cap": "square"
      },
      "paint": {
        "line-color": "#e8e8e8",
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "class",
          "taxiway"
        ]
      ],
      "paint": {
        "line-color": "#e8e8e8",
        "line-width": {
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              15,
              2
            ],
            [
              16,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "waterway_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "class",
          "river"
        ]
      ],
      "layout": {
        "symbol-avoid-edges": false,
        "symbol-placement": "line",
        "symbol-spacing": 300,
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Regular Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-letter-spacing": 0,
        "text-offset": {
          "stops": [
            [
              6,
              [
                0,
                -0.2
              ]
            ],
            [
              11,
              [
                0,
                -0.4
              ]
            ],
            [
              12,
              [
                0,
                -0.6
              ]
            ]
          ]
        },
        "text-padding": 2,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              9,
              8
            ],
            [
              10,
              9
            ]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#51909c",
        "text-halo-color": "#e2eef0",
        "text-halo-width": 1
      }
    },
    {
      "id": "tunnel_service_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e6dfcb",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              17,
              6
            ],
            [
              18,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_minor_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#e6dfcb",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_sec_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e6dfcb",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_pri_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e6dfcb",
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_trunk_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fbdb98",
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_mot_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fbdb98",
        "line-opacity": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              12,
              4
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              17,
              13
            ],
            [
              18,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_path",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "path"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#d7d7d7",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                2,
                2
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_service_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f0eee7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              16,
              2
            ],
            [
              17,
              4
            ],
            [
              18,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_minor_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(238, 238, 238, 1)",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              3
            ],
            [
              16,
              4
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_sec_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f0eee7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_pri_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f0eee7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_trunk_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#f0eee7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_mot_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f0eee7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              11
            ],
            [
              18,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dddddd",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              21,
              7
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_rail_dash",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                5,
                5
              ]
            ],
            [
              16,
              [
                6,
                6
              ]
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              20,
              5
            ]
          ]
        }
      }
    },
    {
      "id": "road_area_pier",
      "type": "fill",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "pier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": "#fbf8f3"
      }
    },
    {
      "id": "road_pier",
      "type": "line",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "pier"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fbf8f3",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              17,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "road_area_bridge",
      "type": "fill",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": "rgba(246, 241, 229, 0.6)"
      }
    },
    {
      "id": "road_service_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fdebce",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              17,
              6
            ],
            [
              18,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "road_minor_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "#ffffff"
            ],
            [
              15.7,
              "#ffffff"
            ],
            [
              16,
              "#fdebce"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              4.3
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "road_pri_case_ramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffeabb",
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_case_ramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              12,
              "#fbdb98"
            ],
            [
              14,
              "#fbdb98"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "road_mot_case_ramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              12,
              "#fbdb98"
            ],
            [
              14,
              "#fbdb98"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "road_sec_case_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              11,
              "#fffef9"
            ],
            [
              12.99,
              "#fffef9"
            ],
            [
              13,
              "#ffedc0"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              1.5
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "road_pri_case_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 7,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              7,
              "#ffe7b7"
            ],
            [
              12,
              "#ffeabb"
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_case_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              5,
              "#ffe7b7"
            ],
            [
              12,
              "#fbdb98"
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "road_mot_case_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              5,
              "#fbdb98"
            ],
            [
              12,
              "#fbdb98"
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.7
            ],
            [
              8,
              0.8
            ],
            [
              11,
              3
            ],
            [
              12,
              4
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              17,
              13
            ],
            [
              18,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "road_path",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "path",
          "track"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#d7d7d7",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                2,
                2
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "road_service_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              16,
              2
            ],
            [
              17,
              4
            ],
            [
              18,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "road_minor_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              3
            ],
            [
              16,
              4
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "road_pri_fill_ramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fefdd7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_fill_ramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFE9A5",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "road_mot_fill_ramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFE9A5",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "road_sec_fill_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fefdd7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "road_pri_fill_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fefdd7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              10,
              0.3
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_fill_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFE9A5",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "road_mot_fill_noramp",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "!has",
          "brunnel"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFE9A5",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              11
            ],
            [
              18,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "rail",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dddddd",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              21,
              7
            ]
          ]
        }
      }
    },
    {
      "id": "rail_dash",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                5,
                5
              ]
            ],
            [
              16,
              [
                6,
                6
              ]
            ]
          ]
        },
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              20,
              5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_service_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fdebce",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              3
            ],
            [
              17,
              6
            ],
            [
              18,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_minor_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "#ffffff"
            ],
            [
              15.7,
              "#ffffff"
            ],
            [
              16,
              "#fdebce"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              15,
              3
            ],
            [
              16,
              4.3
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_sec_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              11,
              "#fffef9"
            ],
            [
              12.99,
              "#fffef9"
            ],
            [
              13,
              "#ffedc0"
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              0.5
            ],
            [
              12,
              1.5
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_pri_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              8,
              "#ffe7b7"
            ],
            [
              12,
              "#ffeabb"
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_trunk_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              5,
              "#fbdb98"
            ],
            [
              12,
              "#fbdb98"
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4
            ],
            [
              14,
              6
            ],
            [
              15,
              8
            ],
            [
              16,
              10
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_mot_case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              5,
              "#fbdb98"
            ],
            [
              10,
              "#fbdb98"
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              1
            ]
          ]
        },
        "line-width": {
          "stops": [
            [
              6,
              0.5
            ],
            [
              7,
              0.8
            ],
            [
              8,
              1
            ],
            [
              11,
              3
            ],
            [
              12,
              4
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              17,
              13
            ],
            [
              18,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_path",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "path"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#d7d7d7",
        "line-dasharray": {
          "stops": [
            [
              15,
              [
                2,
                2
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_service_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "service"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              16,
              2
            ],
            [
              17,
              4
            ],
            [
              18,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_minor_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "minor"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              15,
              3
            ],
            [
              16,
              4
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_sec_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fefdd7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_pri_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fefdd7",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_trunk_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#FFE9A5",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              13,
              2
            ],
            [
              14,
              4
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              12
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_mot_fill",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFE9A5",
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              2
            ],
            [
              13,
              3
            ],
            [
              14,
              5
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              11
            ],
            [
              18,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-antialias": true,
        "fill-color": {
          "base": 1,
          "stops": [
            [
              15.5,
              "#e4dcd0"
            ],
            [
              16,
              "#e4dcd0"
            ]
          ]
        }
      }
    },
    {
      "id": "building-top",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#f3eadc",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              16,
              1
            ]
          ]
        },
        "fill-outline-color": "#e9d8be",
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0,
                0
              ]
            ],
            [
              16,
              [
                -2,
                -2
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_country_outline",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 6,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#f3efed",
        "line-offset": 0,
        "line-opacity": 0.5,
        "line-width": 8
      }
    },
    {
      "id": "boundary_country_inner_z0-4",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 0,
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ],
        [
          "!has",
          "claimed_by"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#ead5d7"
            ],
            [
              5,
              "#ebd6d8"
            ],
            [
              6,
              "#ebd6d8"
            ]
          ]
        },
        "line-offset": 0,
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              3,
              1
            ],
            [
              6,
              1.5
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_country_inner_z5-",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              4,
              "#ead5d7"
            ],
            [
              5,
              "#ebd6d8"
            ],
            [
              6,
              "#ebd6d8"
            ]
          ]
        },
        "line-offset": 0,
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              3,
              1
            ],
            [
              6,
              1.5
            ]
          ]
        }
      }
    },
    {
      "id": "watername_ocean",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "minzoom": 0,
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-allow-overlap": false,
        "text-field": "{name}",
        "text-font": [
          "Montserrat Medium Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-ignore-placement": false,
        "text-letter-spacing": 0.1,
        "text-line-height": 1.2,
        "text-max-width": 6,
        "text-padding": 2,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              0,
              13
            ],
            [
              2,
              14
            ],
            [
              4,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-blur": 0,
        "text-halo-color": "#98c2ca",
        "text-halo-width": 1
      }
    },
    {
      "id": "watername_sea",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "sea"
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-allow-overlap": false,
        "text-field": "{name}",
        "text-font": [
          "Montserrat Medium Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-ignore-placement": false,
        "text-letter-spacing": 0.1,
        "text-line-height": 1.2,
        "text-max-width": 6,
        "text-padding": 2,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": 12
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-blur": 0,
        "text-halo-color": "#98c2ca",
        "text-halo-width": 1
      }
    },
    {
      "id": "watername_lake",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "lake"
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-allow-overlap": false,
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-ignore-placement": false,
        "text-line-height": 1.2,
        "text-padding": 2,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              15,
              11
            ],
            [
              16,
              12
            ],
            [
              17,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#51909c",
        "text-halo-blur": 1,
        "text-halo-color": "#e2eef0",
        "text-halo-width": 1
      }
    },
    {
      "id": "watername_lake_line",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "has",
          "name"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular Italic",
          "Open Sans Italic",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-line-height": 1.2,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              15,
              11
            ],
            [
              16,
              12
            ],
            [
              17,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#51909c",
        "text-halo-blur": 1,
        "text-halo-color": "#e2eef0",
        "text-halo-width": 1
      }
    },
    {
      "id": "park-label",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "park",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "==",
          "rank",
          1
        ],
        [
          "==",
          "$type",
          "Point"
        ]
      ],
      "layout": {
        "text-allow-overlap": false,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-ignore-placement": false,
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        "text-transform": "none",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(89, 120, 92, 1)",
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "place_hamlet",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 12,
      "maxzoom": 16,
      "filter": [
        "any",
        [
          "==",
          "class",
          "neighbourhood"
        ],
        [
          "==",
          "class",
          "hamlet"
        ]
      ],
      "layout": {
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "icon-size": 1,
        "text-anchor": "center",
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              14,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 10,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": {
          "stops": [
            [
              13,
              8
            ],
            [
              14,
              10
            ],
            [
              16,
              11
            ]
          ]
        },
        "text-transform": {
          "stops": [
            [
              12,
              "none"
            ],
            [
              14,
              "uppercase"
            ]
          ]
        }
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_suburbs",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 12,
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "class",
          "suburb"
        ]
      ],
      "layout": {
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "icon-size": 1,
        "text-anchor": "center",
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 10,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": {
          "stops": [
            [
              12,
              9
            ],
            [
              13,
              10
            ],
            [
              14,
              11
            ],
            [
              15,
              12
            ],
            [
              16,
              13
            ]
          ]
        },
        "text-transform": {
          "stops": [
            [
              8,
              "none"
            ],
            [
              12,
              "uppercase"
            ]
          ]
        }
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_villages",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 10,
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "class",
          "village"
        ]
      ],
      "layout": {
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "icon-size": 1,
        "text-anchor": "center",
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 10,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": {
          "stops": [
            [
              10,
              9
            ],
            [
              12,
              10
            ],
            [
              13,
              11
            ],
            [
              14,
              12
            ],
            [
              16,
              13
            ]
          ]
        },
        "text-transform": "none"
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_town",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "class",
          "town"
        ]
      ],
      "layout": {
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "icon-size": 1,
        "text-anchor": "center",
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 10,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": {
          "stops": [
            [
              8,
              10
            ],
            [
              9,
              10
            ],
            [
              10,
              11
            ],
            [
              13,
              14
            ],
            [
              14,
              15
            ]
          ]
        },
        "text-transform": "none"
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_country_2",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 3,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          ">=",
          "rank",
          3
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              11
            ],
            [
              6,
              12
            ],
            [
              7,
              13
            ],
            [
              8,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#6b7d91"
            ],
            [
              5,
              "#8894a3"
            ],
            [
              6,
              "#a3abb5"
            ]
          ]
        },
        "text-halo-color": "#fbf8f3",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_country_1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 2,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          "<=",
          "rank",
          2
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-max-width": {
          "stops": [
            [
              2,
              6
            ],
            [
              3,
              6
            ],
            [
              4,
              9
            ],
            [
              5,
              12
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              3,
              11
            ],
            [
              4,
              12
            ],
            [
              5,
              13
            ],
            [
              6,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#6b7d91"
            ],
            [
              5,
              "#8894a3"
            ],
            [
              6,
              "#a3abb5"
            ]
          ]
        },
        "text-halo-color": "#fbf8f3",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_state",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "class",
          "state"
        ],
        [
          "<=",
          "rank",
          4
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-max-width": 9,
        "text-size": {
          "stops": [
            [
              5,
              12
            ],
            [
              7,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#7c8a9b",
        "text-halo-color": "#fbf8f3",
        "text-halo-width": 0
      }
    },
    {
      "id": "place_continent",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 0,
      "maxzoom": 2,
      "filter": [
        "all",
        [
          "==",
          "class",
          "continent"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-justify": "center",
        "text-keep-upright": false,
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": 14,
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#405c78",
        "text-halo-color": "#fbf8f3",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_r6",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          ">=",
          "rank",
          6
        ]
      ],
      "layout": {
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "icon-size": 1,
        "text-anchor": "center",
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 10,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": {
          "stops": [
            [
              8,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              14
            ],
            [
              13,
              17
            ],
            [
              14,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_r5",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          ">=",
          "rank",
          0
        ],
        [
          "<=",
          "rank",
          5
        ]
      ],
      "layout": {
        "icon-image": "",
        "icon-offset": [
          16,
          0
        ],
        "icon-size": 1,
        "text-anchor": "center",
        "text-field": {
          "stops": [
            [
              8,
              "{name_en}"
            ],
            [
              13,
              "{name}"
            ]
          ]
        },
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 10,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": {
          "stops": [
            [
              8,
              14
            ],
            [
              10,
              16
            ],
            [
              13,
              19
            ],
            [
              14,
              22
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_r7",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 6,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          7
        ]
      ],
      "layout": {
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "icon-size": 0.4,
        "text-anchor": "right",
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 8,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": 12
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_r4",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          4
        ]
      ],
      "layout": {
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "icon-size": 0.4,
        "text-anchor": "right",
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 8,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": 12
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_r2",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 4,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ],
        [
          "<=",
          "rank",
          2
        ]
      ],
      "layout": {
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "icon-size": 0.4,
        "text-anchor": "right",
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 8,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": 12
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_city_dot_z7",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 7,
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "!has",
          "capital"
        ],
        [
          "!in",
          "class",
          "country",
          "state"
        ]
      ],
      "layout": {
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "icon-size": 0.4,
        "text-anchor": "right",
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 8,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": 12
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "place_capital_dot_z7",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 7,
      "maxzoom": 8,
      "filter": [
        "all",
        [
          ">",
          "capital",
          0
        ]
      ],
      "layout": {
        "icon-image": "circle-11",
        "icon-offset": [
          16,
          5
        ],
        "icon-size": 0.4,
        "text-anchor": "right",
        "text-field": "{name_en}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-keep-upright": true,
        "text-max-width": 8,
        "text-offset": [
          0.2,
          0.2
        ],
        "text-size": 12,
        "text-transform": "uppercase"
      },
      "paint": {
        "icon-color": "#405c78",
        "icon-translate-anchor": "map",
        "text-color": "#405c78",
        "text-halo-color": "#f2f5f8",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_stadium",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "in",
          "class",
          "stadium",
          "cemetery",
          "attraction"
        ],
        [
          "<=",
          "rank",
          3
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              15,
              8
            ],
            [
              17,
              9
            ],
            [
              18,
              10
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-color": "rgba(255,255,255,0.15)",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_park",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "class",
          "park"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Montserrat Medium",
          "Open Sans Bold",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              15,
              8
            ],
            [
              17,
              9
            ],
            [
              18,
              10
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-color": "rgba(255,255,255,0.15)",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_minor",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "in",
          "class",
          "minor",
          "service"
        ]
      ],
      "layout": {
        "symbol-avoid-edges": false,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{name}",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-justify": "center",
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": 9
      },
      "paint": {
        "text-color": "#87919e",
        "text-halo-color": "#fbf8f3",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_sec",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "symbol-avoid-edges": false,
        "symbol-placement": "line",
        "symbol-spacing": 200,
        "text-field": "{name}",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-justify": "center",
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              15,
              9
            ],
            [
              16,
              11
            ],
            [
              18,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#87919e",
        "text-halo-color": "#fbf8f3",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_pri",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "in",
          "class",
          "primary"
        ]
      ],
      "layout": {
        "symbol-avoid-edges": false,
        "symbol-placement": "line",
        "symbol-spacing": {
          "stops": [
            [
              6,
              200
            ],
            [
              16,
              250
            ]
          ]
        },
        "text-field": "{name}",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-justify": "center",
        "text-letter-spacing": {
          "stops": [
            [
              14,
              0
            ],
            [
              16,
              0.2
            ]
          ]
        },
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              14,
              10
            ],
            [
              15,
              10
            ],
            [
              16,
              11
            ],
            [
              18,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#798493",
        "text-halo-color": "#fefde1",
        "text-halo-width": 1
      }
    },
    {
      "id": "roadname_major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "in",
          "class",
          "trunk",
          "motorway"
        ]
      ],
      "layout": {
        "symbol-avoid-edges": false,
        "symbol-placement": "line",
        "symbol-spacing": {
          "stops": [
            [
              6,
              200
            ],
            [
              16,
              250
            ]
          ]
        },
        "text-field": "{name}",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-justify": "center",
        "text-letter-spacing": {
          "stops": [
            [
              13,
              0
            ],
            [
              16,
              0.2
            ]
          ]
        },
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              14,
              10
            ],
            [
              15,
              10
            ],
            [
              16,
              11
            ],
            [
              18,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#798493",
        "text-halo-color": "#fff0c4",
        "text-halo-width": 1
      }
    },
    {
      "id": "housenumber",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "housenumber",
      "minzoom": 17,
      "maxzoom": 24,
      "layout": {
        "text-field": "{housenumber}",
        "text-font": [
          "Montserrat Regular",
          "Open Sans Regular",
          "Noto Sans Regular",
          "HanWangHeiLight Regular",
          "NanumBarunGothic Regular"
        ],
        "text-size": {
          "stops": [
            [
              17,
              9
            ],
            [
              18,
              11
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#d2b17d",
        "text-halo-color": "rgba(255,255,255,0.15)",
        "text-halo-width": 0.75
      }
    }
  ],
  "id": "voyager"
}
